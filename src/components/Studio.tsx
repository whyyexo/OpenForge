import { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Plus, 
  Play, 
  Save, 
  Download, 
  Settings, 
  Sparkles, 
  Trash2, 
  Copy, 
  Undo, 
  Redo,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Circle,
  Square,
  Triangle,
  Hexagon
} from 'lucide-react';
import { Block, Connection, BlockTemplate } from '../types';
import { blockTemplates, getBlockTemplate, createBlockFromTemplate, getBlockTemplatesByCategory } from '../lib/blockTemplates';
import { supabaseHelpers } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface DragState {
  isDragging: boolean;
  startPos: { x: number; y: number };
  draggedBlock: Block | null;
}

interface ConnectionState {
  isConnecting: boolean;
  sourceBlock: string | null;
  sourcePort: string | null;
  startPos: { x: number; y: number };
  currentPos: { x: number; y: number };
}

export default function Studio() {
  const { profile } = useAuth();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 1 });
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startPos: { x: 0, y: 0 },
    draggedBlock: null
  });
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    isConnecting: false,
    sourceBlock: null,
    sourcePort: null,
    startPos: { x: 0, y: 0 },
    currentPos: { x: 0, y: 0 }
  });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [saving, setSaving] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    input: true,
    ai: true,
    processing: true,
    output: true,
    integrations: true
  });

  // Categories for block organization
  const categories = [
    { id: 'input', label: 'Input', icon: '📥', color: 'text-green-400' },
    { id: 'ai', label: 'AI', icon: '🤖', color: 'text-purple-400' },
    { id: 'processing', label: 'Processing', icon: '⚙️', color: 'text-blue-400' },
    { id: 'output', label: 'Output', icon: '📤', color: 'text-orange-400' },
    { id: 'integrations', label: 'Integrations', icon: '🔌', color: 'text-indigo-400' }
  ];

  // Add block to canvas
  const addBlock = useCallback((template: BlockTemplate) => {
    const centerX = viewport.x + (window.innerWidth - 300) / 2 / viewport.zoom;
    const centerY = viewport.y + (window.innerHeight - 100) / 2 / viewport.zoom;
    
    const newBlock = createBlockFromTemplate(template, { x: centerX, y: centerY });
    setBlocks(prev => [...prev, newBlock]);
    setSelectedBlock(newBlock.id);
  }, [viewport]);

  // Delete block
  const deleteBlock = useCallback((blockId: string) => {
    setBlocks(prev => prev.filter(b => b.id !== blockId));
    setConnections(prev => prev.filter(c => c.source !== blockId && c.target !== blockId));
    setSelectedBlock(null);
  }, []);

  // Delete connection
  const deleteConnection = useCallback((connectionId: string) => {
    setConnections(prev => prev.filter(c => c.id !== connectionId));
    setSelectedConnection(null);
  }, []);

  // Handle block drag
  const handleBlockMouseDown = useCallback((e: React.MouseEvent, block: Block) => {
    if (e.button === 0) {
      e.stopPropagation();
      setSelectedBlock(block.id);
      setSelectedConnection(null);
      setDragState({
        isDragging: true,
        startPos: { x: e.clientX, y: e.clientY },
        draggedBlock: block
      });
    }
  }, []);

  // Handle port click for connections
  const handlePortMouseDown = useCallback((e: React.MouseEvent, blockId: string, portId: string, isOutput: boolean) => {
    e.stopPropagation();
    
    if (isOutput) {
      const block = blocks.find(b => b.id === blockId);
      if (!block) return;

      setConnectionState({
        isConnecting: true,
        sourceBlock: blockId,
        sourcePort: portId,
        startPos: { x: e.clientX, y: e.clientY },
        currentPos: { x: e.clientX, y: e.clientY }
      });
    } else {
      // Handle input port click (completing connection)
      if (connectionState.isConnecting && connectionState.sourceBlock && connectionState.sourcePort) {
        const newConnection: Connection = {
          id: `conn-${Date.now()}`,
          source: connectionState.sourceBlock,
          target: blockId,
          sourcePort: connectionState.sourcePort,
          targetPort: portId,
          type: 'data'
        };
        
        // Check if connection already exists
        const exists = connections.some(c => 
          c.source === newConnection.source && 
          c.target === newConnection.target &&
          c.sourcePort === newConnection.sourcePort &&
          c.targetPort === newConnection.targetPort
        );
        
        if (!exists) {
          setConnections(prev => [...prev, newConnection]);
        }
        
        setConnectionState({
          isConnecting: false,
          sourceBlock: null,
          sourcePort: null,
          startPos: { x: 0, y: 0 },
          currentPos: { x: 0, y: 0 }
        });
      }
    }
  }, [blocks, connections, connectionState]);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragState.isDragging && dragState.draggedBlock) {
      const deltaX = (e.clientX - dragState.startPos.x) / viewport.zoom;
      const deltaY = (e.clientY - dragState.startPos.y) / viewport.zoom;
      
      setBlocks(prev => prev.map(block => 
        block.id === dragState.draggedBlock!.id
          ? { ...block, position: { 
              x: block.position.x + deltaX, 
              y: block.position.y + deltaY 
            }}
          : block
      ));
      
      setDragState(prev => ({
        ...prev,
        startPos: { x: e.clientX, y: e.clientY }
      }));
    } else if (connectionState.isConnecting) {
      setConnectionState(prev => ({
        ...prev,
        currentPos: { x: e.clientX, y: e.clientY }
      }));
    } else if (isPanning) {
      setViewport(prev => ({
        ...prev,
        x: prev.x + (e.clientX - panStart.x),
        y: prev.y + (e.clientY - panStart.y)
      }));
      setPanStart({ x: e.clientX, y: e.clientY });
    }
  }, [dragState, connectionState, isPanning, panStart, viewport.zoom]);

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setDragState({
      isDragging: false,
      startPos: { x: 0, y: 0 },
      draggedBlock: null
    });
    
    if (connectionState.isConnecting) {
      setConnectionState({
        isConnecting: false,
        sourceBlock: null,
        sourcePort: null,
        startPos: { x: 0, y: 0 },
        currentPos: { x: 0, y: 0 }
      });
    }
    
    setIsPanning(false);
  }, [connectionState.isConnecting]);

  // Handle canvas mouse down
  const handleCanvasMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0 && e.target === canvasRef.current) {
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY });
      setSelectedBlock(null);
      setSelectedConnection(null);
    }
  }, []);

  // Handle zoom
  const handleZoom = useCallback((delta: number) => {
    setViewport(prev => ({
      ...prev,
      zoom: Math.max(0.1, Math.min(3, prev.zoom + delta))
    }));
  }, []);

  // Handle wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleZoom(delta);
  }, [handleZoom]);

  // Save agent
  const handleSave = async () => {
    if (!profile || !agentName.trim()) {
      alert('Please enter an agent name');
      return;
    }

    setSaving(true);
    try {
      const canvasData = {
        blocks,
        connections,
        viewport,
      };

      const agentData = {
        name: agentName,
        description: agentDescription,
        canvas_data: canvasData,
        configuration: {},
        is_public: false,
        is_template: false,
        price: 0,
        category: 'Custom',
        tags: [],
      };

      const { error } = await supabaseHelpers.createAgent(agentData);
      if (error) {
        console.error('Error saving agent:', error);
        alert('Error saving agent. Please try again.');
      } else {
        alert('Agent saved successfully!');
      }
    } catch (error) {
      console.error('Error saving agent:', error);
      alert('Error saving agent. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // Get filtered block templates
  const filteredTemplates = blockTemplates.filter(template => {
    const matchesSearch = template.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get block position for rendering
  const getBlockPosition = (block: Block) => {
    return {
      left: block.position.x,
      top: block.position.y
    };
  };

  // Get connection path
  const getConnectionPath = (connection: Connection) => {
    const sourceBlock = blocks.find(b => b.id === connection.source);
    const targetBlock = blocks.find(b => b.id === connection.target);
    
    if (!sourceBlock || !targetBlock) return '';

    const sourcePos = {
      x: sourceBlock.position.x + 200, // Block width / 2
      y: sourceBlock.position.y + 60   // Block height / 2
    };
    
    const targetPos = {
      x: targetBlock.position.x,
      y: targetBlock.position.y + 60
    };

    const midX = (sourcePos.x + targetPos.x) / 2;
    
    return `M ${sourcePos.x} ${sourcePos.y} Q ${midX} ${sourcePos.y} ${targetPos.x} ${targetPos.y}`;
  };

  return (
    <div className="flex flex-col h-full bg-black overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        <div>
            <h1 className="text-2xl font-bold text-white">AI Studio</h1>
            <p className="text-sm text-slate-400">Build intelligent workflows</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
            <button
              onClick={() => handleZoom(-0.1)}
              className="p-2 hover:bg-slate-700 rounded transition-colors"
            >
              <ZoomOut className="w-4 h-4 text-slate-300" />
            </button>
            <span className="text-sm text-slate-300 px-2">{Math.round(viewport.zoom * 100)}%</span>
            <button
              onClick={() => handleZoom(0.1)}
              className="p-2 hover:bg-slate-700 rounded transition-colors"
            >
              <ZoomIn className="w-4 h-4 text-slate-300" />
            </button>
          </div>
          
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save'}
          </button>
          
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all flex items-center gap-2">
            <Play className="w-4 h-4" />
            Test Run
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 flex flex-col">
          {/* Agent Info */}
          <div className="p-4 border-b border-white/10">
            <h3 className="text-sm font-semibold text-white mb-3">Agent Configuration</h3>
              <div className="space-y-3">
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                placeholder="Agent name"
                  />
                  <textarea
                    value={agentDescription}
                    onChange={(e) => setAgentDescription(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                rows={2}
                placeholder="Description"
              />
            </div>
          </div>

          {/* Block Library */}
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold text-white">Block Library</h3>
                <div className="flex-1" />
                <Plus className="w-4 h-4 text-slate-400" />
              </div>
              
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Search blocks..."
                  />
                </div>
              
              <div className="flex gap-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    selectedCategory === 'all' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {selectedCategory === 'all' ? (
                categories.map(category => {
                  const categoryTemplates = getBlockTemplatesByCategory(category.id);
                  if (categoryTemplates.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="mb-4">
                      <button
                        onClick={() => setExpandedCategories(prev => ({
                          ...prev,
                          [category.id]: !prev[category.id]
                        }))}
                        className="flex items-center gap-2 w-full text-left p-2 hover:bg-slate-800/50 rounded transition-colors"
                      >
                        {expandedCategories[category.id] ? (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                        <span className={`${category.color} text-sm font-medium`}>
                          {category.icon} {category.label}
                        </span>
                      </button>
                      
                      {expandedCategories[category.id] && (
                        <div className="ml-6 space-y-2 mt-2">
                          {categoryTemplates.map(template => (
                            <button
                              key={template.type}
                              onClick={() => addBlock(template)}
                              className="w-full p-3 bg-slate-800/50 hover:bg-slate-800 border border-white/10 rounded-lg text-left transition-all group"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center text-sm group-hover:scale-110 transition-transform`}>
                                  {template.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-white">{template.label}</p>
                                  <p className="text-xs text-slate-400">{template.type}</p>
                                </div>
                              </div>
                              <p className="text-xs text-slate-500">{template.description}</p>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="space-y-2">
                  {filteredTemplates.map(template => (
                    <button
                      key={template.type}
                      onClick={() => addBlock(template)}
                      className="w-full p-3 bg-slate-800/50 hover:bg-slate-800 border border-white/10 rounded-lg text-left transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center text-sm group-hover:scale-110 transition-transform`}>
                          {template.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{template.label}</p>
                          <p className="text-xs text-slate-400">{template.type}</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500">{template.description}</p>
                    </button>
                  ))}
            </div>
          )}
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          className="flex-1 relative overflow-hidden bg-slate-900 cursor-move"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${20 * viewport.zoom}px ${20 * viewport.zoom}px`,
            backgroundPosition: `${viewport.x}px ${viewport.y}px`,
          }}
        >
          <div
            style={{
              transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
              transformOrigin: '0 0',
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
          >
            {/* Connections */}
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{ width: '100%', height: '100%' }}
            >
              {connections.map(connection => (
                <path
                  key={connection.id}
                  d={getConnectionPath(connection)}
                  stroke={selectedConnection === connection.id ? '#3b82f6' : '#64748b'}
                  strokeWidth={selectedConnection === connection.id ? '3' : '2'}
                  fill="none"
                  className="transition-all cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedConnection(connection.id);
                    setSelectedBlock(null);
                  }}
                />
              ))}
              
              {/* Connection preview */}
              {connectionState.isConnecting && (
                <path
                  d={`M ${connectionState.startPos.x - viewport.x} ${connectionState.startPos.y - viewport.y} L ${connectionState.currentPos.x - viewport.x} ${connectionState.currentPos.y - viewport.y}`}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              )}
            </svg>

            {/* Blocks */}
            {blocks.map(block => {
              const template = getBlockTemplate(block.type);
              if (!template) return null;

              return (
              <div
                key={block.id}
                className={`absolute w-48 bg-slate-800 border-2 rounded-lg shadow-xl transition-all cursor-move ${
                  selectedBlock === block.id
                    ? 'border-blue-500 shadow-blue-500/20'
                      : 'border-white/10'
                }`}
                  style={getBlockPosition(block)}
                onMouseDown={(e) => handleBlockMouseDown(e, block)}
              >
                  {/* Block Header */}
                  <div className={`h-3 rounded-t-md bg-gradient-to-r ${template.color}`} />
                  
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${template.color} flex items-center justify-center text-xs`}>
                        {template.icon}
                      </div>
                      <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{block.data.label}</p>
                        <p className="text-xs text-slate-400">{block.type}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteBlock(block.id);
                        }}
                        className="p-1 hover:bg-slate-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-3 h-3 text-red-400" />
                      </button>
                    </div>

                    {/* Input Ports */}
                    <div className="space-y-1 mb-3">
                      {block.data.inputs.map((input, index) => (
                        <div
                          key={input.id}
                          className="flex items-center gap-2 text-xs"
                        >
                          <div
                            className="w-3 h-3 rounded-full bg-slate-600 hover:bg-blue-500 transition-colors cursor-pointer border-2 border-slate-700"
                            onMouseDown={(e) => handlePortMouseDown(e, block.id, input.id, false)}
                            title={`Input: ${input.name}`}
                          />
                          <span className="text-slate-300">{input.name}</span>
                          {input.required && <span className="text-red-400">*</span>}
                        </div>
                      ))}
                  </div>

                    {/* Output Ports */}
                    <div className="space-y-1">
                      {block.data.outputs.map((output, index) => (
                        <div
                          key={output.id}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span className="text-slate-300">{output.name}</span>
                          <div
                            className="w-3 h-3 rounded-full bg-slate-600 hover:bg-blue-500 transition-colors cursor-pointer border-2 border-slate-700"
                            onMouseDown={(e) => handlePortMouseDown(e, block.id, output.id, true)}
                            title={`Output: ${output.name}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {blocks.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Start Building</h3>
                <p className="text-slate-400 text-lg max-w-md mb-6">
                  Add blocks from the sidebar to create your AI workflow. Connect them together to build powerful automations.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => addBlock(getBlockTemplate('input')!)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Add Input Block
                  </button>
                  <button
                    onClick={() => addBlock(getBlockTemplate('llm')!)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    Add AI Block
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}