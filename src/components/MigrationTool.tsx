import React, { useState } from 'react';
import { UserMigrationManager } from '../lib/migration';

interface MigrationStats {
  total: number;
  migrated: number;
  skipped: number;
  errors: number;
  log: any[];
}

const MigrationTool: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [stats, setStats] = useState<MigrationStats | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [syncCode, setSyncCode] = useState<string>('');

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const runMigration = async () => {
    setIsRunning(true);
    setLogs([]);
    addLog('Starting migration process...');

    try {
      const migrationManager = new UserMigrationManager();
      
      // First, let's analyze the source schema
      addLog('Analyzing source database schema...');
      const sourceProfiles = await migrationManager.getSourceUserProfiles();
      addLog(`Found ${sourceProfiles.length} users to migrate`);

      if (sourceProfiles.length > 0) {
        addLog('Sample user data structure:');
        addLog(JSON.stringify(sourceProfiles[0], null, 2));
      }

      // Run migration
      addLog('Starting user migration...');
      const result = await migrationManager.migrateAllUsers();
      setStats(result);

      addLog(`Migration completed: ${result.migrated} migrated, ${result.skipped} skipped, ${result.errors} errors`);

      // Generate sync code
      addLog('Generating sync system for your other project...');
      const sync = await migrationManager.createSyncSystem();
      setSyncCode(sync);

    } catch (error) {
      addLog(`Migration failed: ${error.message}`);
      console.error('Migration error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadSyncCode = () => {
    const blob = new Blob([syncCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'neuroflow-sync.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Migration Tool</h1>
        <p className="text-gray-600">
          Migrate users from your other Supabase project to NeuroFlow
        </p>
      </div>

      <div className="mb-6">
        <button
          onClick={runMigration}
          disabled={isRunning}
          className={`px-6 py-3 rounded-lg font-medium ${
            isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isRunning ? 'Migrating...' : 'Start Migration'}
        </button>
      </div>

      {stats && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Migration Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.migrated}</div>
              <div className="text-sm text-gray-600">Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.skipped}</div>
              <div className="text-sm text-gray-600">Skipped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{stats.errors}</div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
          </div>
        </div>
      )}

      {logs.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Migration Logs</h3>
          <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}

      {syncCode && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Sync System for Your Other Project</h3>
            <button
              onClick={downloadSyncCode}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Download Sync Code
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              Copy this code to your other project to enable synchronization with NeuroFlow:
            </p>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
              {syncCode}
            </pre>
          </div>
        </div>
      )}

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Migration Features</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>✅ Migrates all 44 columns from user_profiles</li>
          <li>✅ Preserves subscription tiers (Lunch, Boost, Scale)</li>
          <li>✅ Maintains admin roles</li>
          <li>✅ Extracts social links automatically</li>
          <li>✅ Stores original data for reference</li>
          <li>✅ Prevents duplicate migrations</li>
          <li>✅ Generates sync system for your other project</li>
        </ul>
      </div>
    </div>
  );
};

export default MigrationTool;
