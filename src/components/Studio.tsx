import { useState, useRef, useEffect } from 'react';
import { Plus, Play, Save, Download, Settings, Sparkles } from 'lucide-react';
import type { Block, Connection } from '../types';
import { supabaseHelpers } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const blockTypes = [
  { type: 'input', label: 'Input', color: 'from-green-500 to-emerald-600' },
  { type: 'process', label: 'Process', color: 'from-blue-500 to-cyan-600' },
  { type: 'condition', label: 'Condition', color: 'from-yellow-500 to-orange-600' },
  { type: 'transform', label: 'Transform', color: 'from-purple-500 to-pink-600' },
  { type: 'api', label: 'API Call', color: 'from-red-500 to-rose-600' },
  { type: 'output', label: 'Output', color: 'from-indigo-500 to-blue-600' },
];

export default function Studio() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [draggedBlock, setDraggedBlock] = useState<Block | null>(null);
  const [viewport, setViewport] = useState({ x: 0, y: 0, zoom: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [saving, setSaving] = useState(false);
  const [agentName, setAgentName] = useState('');
  const [agentDescription, setAgentDescription] = useState('');
  const canvasRef = useRef<HTMLDivElement>(null);
  const { profile } = useAuth();

  const addBlock = (type: string) => {
    const newBlock: Block = {
      id: `block-${Date.now()}`,
      type: type as Block['type'],
      position: { x: 400 + Math.random() * 200, y: 300 + Math.random() * 200 },
      data: {
        label: type.charAt(0).toUpperCase() + type.slice(1),
        config: {},
      },
    };
    setBlocks([...blocks, newBlock]);
  };

  const handleBlockMouseDown = (e: React.MouseEvent, block: Block) => {
    if (e.button === 0) {
      e.stopPropagation();
      setDraggedBlock(block);
      setSelectedBlock(block.id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedBlock) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - viewport.x) / viewport.zoom;
        const y = (e.clientY - rect.top - viewport.y) / viewport.zoom;

        setBlocks(blocks.map(b =>
          b.id === draggedBlock.id
            ? { ...b, position: { x, y } }
            : b
        ));
      }
    } else if (isPanning) {
      setViewport({
        ...viewport,
        x: viewport.x + (e.clientX - panStart.x),
        y: viewport.y + (e.clientY - panStart.y),
      });
      setPanStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDraggedBlock(null);
    setIsPanning(false);
  };

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0 && e.target === canvasRef.current) {
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY });
      setSelectedBlock(null);
    }
  };

  const getBlockColor = (type: string) => {
    return blockTypes.find(b => b.type === type)?.color || 'from-gray-500 to-gray-600';
  };

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

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white">Agent Studio</h1>
          <p className="text-sm text-slate-400 mt-1">Create your AI agent workflow</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all flex items-center gap-2">
            <Play className="w-4 h-4" />
            Test Run
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-slate-950 border-r border-slate-800 p-4 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Blocks</h3>
            <Plus className="w-4 h-4 text-slate-400" />
          </div>
          <div className="space-y-2">
            {blockTypes.map((blockType) => (
              <button
                key={blockType.type}
                onClick={() => addBlock(blockType.type)}
                className="w-full p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-left transition-all group"
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${blockType.color} mb-2 group-hover:scale-110 transition-transform`} />
                <p className="text-sm font-medium text-white">{blockType.label}</p>
                <p className="text-xs text-slate-400 mt-1">Click to add</p>
              </button>
            ))}
          </div>

          {selectedBlock && (
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h3 className="text-sm font-semibold text-white mb-4">Properties</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Agent Name</label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Enter agent name"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Description</label>
                  <textarea
                    value={agentDescription}
                    onChange={(e) => setAgentDescription(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                    rows={3}
                    placeholder="Describe your agent"
                  />
                </div>
                <button className="w-full px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                  <Settings className="w-4 h-4" />
                  Configure
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          ref={canvasRef}
          className="flex-1 relative overflow-hidden bg-slate-900 cursor-move"
          onMouseDown={handleCanvasMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
            }}
          >
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute w-48 bg-slate-800 border-2 rounded-lg shadow-xl transition-all cursor-move ${
                  selectedBlock === block.id
                    ? 'border-blue-500 shadow-blue-500/20'
                    : 'border-slate-700'
                }`}
                style={{
                  left: block.position.x,
                  top: block.position.y,
                }}
                onMouseDown={(e) => handleBlockMouseDown(e, block)}
              >
                <div className={`h-2 rounded-t-md bg-gradient-to-r ${getBlockColor(block.type)}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getBlockColor(block.type)}`} />
                    <p className="text-sm font-semibold text-white">{block.data.label}</p>
                  </div>
                  <p className="text-xs text-slate-400">{block.type}</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="w-3 h-3 rounded-full bg-slate-600 hover:bg-blue-500 transition-colors cursor-pointer" title="Input port" />
                    <div className="w-3 h-3 rounded-full bg-slate-600 hover:bg-blue-500 transition-colors cursor-pointer" title="Output port" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blocks.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Start Building</h3>
                <p className="text-slate-400 text-sm max-w-md">
                  Add blocks from the left panel to create your AI agent workflow
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
