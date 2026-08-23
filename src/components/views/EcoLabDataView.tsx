import React, { useState } from 'react';
import { DATASETS_DATA } from '../../data/mockData';
import { Database, Download, Code, Table, LineChart as ChartIcon, Check, Copy, Sparkles, Filter } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

interface EcoLabDataViewProps {
  isDark: boolean;
  lang: 'es' | 'en';
}

export const EcoLabDataView: React.FC<EcoLabDataViewProps> = ({ isDark, lang }) => {
  const dataset = DATASETS_DATA[0];
  const [activeTab, setActiveTab] = useState<'chart' | 'table' | 'api'>('chart');
  const [timeRange, setTimeRange] = useState<'all' | 'post-covid' | 'recent'>('all');
  const [activeIndicators, setActiveIndicators] = useState({
    gdpGrowth: true,
    inflation: true,
    unemployment: false,
    interestRate: true,
    giniIndex: false
  });
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const getFilteredData = () => {
    if (!dataset?.data) return [];
    if (timeRange === 'recent') {
      return dataset.data.slice(-8); // 2024-2025
    }
    if (timeRange === 'post-covid') {
      return dataset.data.slice(0, 12); // 2020-2022
    }
    return dataset.data;
  };

  const currentData = getFilteredData();

  const toggleIndicator = (key: keyof typeof activeIndicators) => {
    setActiveIndicators((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDownloadCSV = () => {
    if (!dataset?.data) return;
    const headers = ['date', 'gdpGrowth', 'inflation', 'unemployment', 'interestRate', 'tradeBalance', 'giniIndex'];
    const csvRows = [
      headers.join(','),
      ...dataset.data.map((row) =>
        [row.date, row.gdpGrowth, row.inflation, row.unemployment, row.interestRate, row.tradeBalance, row.giniIndex].join(',')
      )
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.code}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJSON = () => {
    if (!dataset?.data) return;
    const blob = new Blob([JSON.stringify(dataset.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${dataset.code}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = (langSnippet: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(langSnippet);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const rSnippet = `# Descarga directa desde el API de EcoLab Data
library(httr)
library(jsonlite)
library(tidyverse)

url <- "https://api.ecolab-research.org/v1/datasets/ECOLAB_MACRO_LATAM_2025"
response <- GET(url)
macro_latam <- fromJSON(content(response, "text", encoding = "UTF-8"))

# Gráfico rápido en ggplot2
ggplot(macro_latam, aes(x = date, y = inflation, group = 1)) +
  geom_line(color = "#0055ff", linewidth = 1.2) +
  theme_minimal() +
  labs(title = "Inflación Trimestral LATAM", y = "% Interanual")`;

  const pythonSnippet = `# Descarga directa en Python con Pandas
import requests
import pandas as pd
import matplotlib.pyplot as plt

url = "https://api.ecolab-research.org/v1/datasets/ECOLAB_MACRO_LATAM_2025"
data = requests.get(url).json()
df = pd.DataFrame(data)

# Análisis de correlación entre TPM e Inflación
print(df[['inflation', 'interestRate', 'gdpGrowth']].describe())`;

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/30 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
          <Database className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Observatorio Económico & Data Hub' : 'Data Observatory & Hub'}</span>
        </div>
        <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
          {lang === 'es' ? 'Series Macroeconómicas y Microdatos' : 'Macro Series & Microdata Hub'}
        </h2>
        <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
          {lang === 'es'
            ? 'Acceso centralizado, visualización interactiva y descarga estandarizada de indicadores económicos para investigación empírica.'
            : 'Centralized access, interactive visualization, and API endpoints for economic research.'}
        </p>
      </div>

      {/* Main Observatory Container */}
      <div className={`rounded-3xl border overflow-hidden p-6 sm:p-8 mb-12 ${
        isDark ? 'bg-[#041b47] border-[#e0eaff]/20 text-[#e0eaff]' : 'bg-white border-[#041b47]/15 shadow-xl text-[#041b47]'
      }`}>
        {/* Title Bar & Actions */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                {dataset.code}
              </span>
              <span className="text-xs font-mono-code text-[#e0eaff]/70">
                {dataset.frequency} • {dataset.timeCoverage}
              </span>
            </div>
            <h3 className={`font-serif-display text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {dataset.title}
            </h3>
            <p className="text-xs text-[#e0eaff]/70 font-mono-code mt-0.5">
              {lang === 'es' ? 'Fuente:' : 'Source:'} {dataset.source} (Actualizado: {dataset.lastUpdated})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-lg bg-[#02102e] hover:bg-[#ffc300]/20 border border-[#e0eaff]/20 text-xs font-mono-code text-[#ffc300] hover:text-white flex items-center gap-1.5 transition-all font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CSV</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="px-3.5 py-2 rounded-lg bg-[#02102e] hover:bg-[#ffc300]/20 border border-[#e0eaff]/20 text-xs font-mono-code text-[#e0eaff] hover:text-white flex items-center gap-1.5 transition-all font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>
          </div>
        </div>

        {/* View Mode Tabs (Chart, Table, API) */}
        <div className="flex flex-wrap items-center justify-between gap-4 my-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code flex items-center gap-1.5 transition-all border font-semibold ${
                activeTab === 'chart'
                  ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300]'
                  : 'bg-[#02102e] border-[#e0eaff]/20 text-[#e0eaff]/70 hover:text-white'
              }`}
            >
              <ChartIcon className="w-4 h-4" />
              <span>{lang === 'es' ? 'Gráfico Interactivo' : 'Interactive Chart'}</span>
            </button>

            <button
              onClick={() => setActiveTab('table')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code flex items-center gap-1.5 transition-all border font-semibold ${
                activeTab === 'table'
                  ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300]'
                  : 'bg-[#02102e] border-[#e0eaff]/20 text-[#e0eaff]/70 hover:text-white'
              }`}
            >
              <Table className="w-4 h-4" />
              <span>{lang === 'es' ? 'Tabla de Datos' : 'Data Table'}</span>
            </button>

            <button
              onClick={() => setActiveTab('api')}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code flex items-center gap-1.5 transition-all border font-semibold ${
                activeTab === 'api'
                  ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300]'
                  : 'bg-[#02102e] border-[#e0eaff]/20 text-[#e0eaff]/70 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>{lang === 'es' ? 'Código API (R/Python)' : 'API Endpoints'}</span>
            </button>
          </div>

          {activeTab === 'chart' && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-code text-[#e0eaff]/70">{lang === 'es' ? 'Periodo:' : 'Range:'}</span>
              {[
                { id: 'all', label: lang === 'es' ? '2020-2025' : 'All (2020-2025)' },
                { id: 'post-covid', label: '2020-2022' },
                { id: 'recent', label: '2024-2025' }
              ].map((range) => (
                <button
                  key={range.id}
                  onClick={() => setTimeRange(range.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all border ${
                    timeRange === range.id
                      ? 'bg-[#ffc300]/20 text-[#ffc300] border-[#ffc300] font-bold'
                      : 'bg-[#02102e] border-[#e0eaff]/15 text-[#e0eaff]/70 hover:text-white'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tab 1: Interactive Chart */}
        {activeTab === 'chart' && (
          <div className="space-y-6">
            {/* Variable Toggles */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => toggleIndicator('gdpGrowth')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-2 border transition-all ${
                  activeIndicators.gdpGrowth
                    ? 'bg-[#ffc300]/20 text-[#ffc300] border-[#ffc300]/40 font-bold'
                    : 'bg-[#02102e] text-[#e0eaff]/40 border-transparent opacity-60'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffc300]" />
                <span>PIB Real (% YoY)</span>
              </button>

              <button
                onClick={() => toggleIndicator('inflation')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-2 border transition-all ${
                  activeIndicators.inflation
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                    : 'bg-[#02102e] text-[#e0eaff]/40 border-transparent opacity-60'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Inflación IPC (%)</span>
              </button>

              <button
                onClick={() => toggleIndicator('interestRate')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-2 border transition-all ${
                  activeIndicators.interestRate
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold'
                    : 'bg-[#02102e] text-[#e0eaff]/40 border-transparent opacity-60'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-sky-300" />
                <span>Tasa Política Monetaria TPM (%)</span>
              </button>

              <button
                onClick={() => toggleIndicator('unemployment')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code flex items-center gap-2 border transition-all ${
                  activeIndicators.unemployment
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold'
                    : 'bg-[#02102e] text-[#e0eaff]/40 border-transparent opacity-60'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span>Desempleo (%)</span>
              </button>
            </div>

            {/* Chart Area */}
            <div className="h-96 w-full p-4 bg-[#02102e] rounded-2xl border border-[#e0eaff]/15">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#07225b" />
                  <XAxis dataKey="date" stroke="#e0eaff" fontSize={11} opacity={0.7} />
                  <YAxis stroke="#e0eaff" fontSize={11} opacity={0.7} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#041b47', borderColor: '#ffc300', color: '#ffffff', borderRadius: '10px', fontSize: '12px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  {activeIndicators.gdpGrowth && (
                    <Line type="monotone" dataKey="gdpGrowth" name="PIB Real (% YoY)" stroke="#ffc300" strokeWidth={2.5} dot={{ r: 3 }} />
                  )}
                  {activeIndicators.inflation && (
                    <Line type="monotone" dataKey="inflation" name="Inflación IPC (%)" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} />
                  )}
                  {activeIndicators.interestRate && (
                    <Line type="monotone" dataKey="interestRate" name="Tasa TPM (%)" stroke="#e0eaff" strokeWidth={2.5} dot={{ r: 3 }} />
                  )}
                  {activeIndicators.unemployment && (
                    <Line type="monotone" dataKey="unemployment" name="Desempleo (%)" stroke="#f43f5e" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 3 }} />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Tab 2: Data Table */}
        {activeTab === 'table' && (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-xs font-mono-code text-left">
              <thead className="bg-[#02102e] text-[#ffc300] uppercase border-b border-white/10">
                <tr>
                  <th className="p-3">Periodo (Trimestre)</th>
                  <th className="p-3">PIB Real (%)</th>
                  <th className="p-3">Inflación (%)</th>
                  <th className="p-3">Tasa TPM (%)</th>
                  <th className="p-3">Desempleo (%)</th>
                  <th className="p-3">Saldo Comercial (M USD)</th>
                  <th className="p-3">Índice Gini</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-bold text-white">{row.date}</td>
                    <td className={`p-3 ${row.gdpGrowth >= 0 ? 'text-[#ffc300]' : 'text-rose-400'}`}>
                      {row.gdpGrowth > 0 ? `+${row.gdpGrowth}` : row.gdpGrowth}%
                    </td>
                    <td className="p-3 text-amber-300">{row.inflation}%</td>
                    <td className="p-3 text-[#e0eaff]">{row.interestRate}%</td>
                    <td className="p-3 text-[#e0eaff]/80">{row.unemployment}%</td>
                    <td className="p-3 text-[#e0eaff]/80">${row.tradeBalance.toLocaleString()}</td>
                    <td className="p-3 text-[#ffc300]">{row.giniIndex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: API Integration Snippets */}
        {activeTab === 'api' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-code text-[#ffc300] font-bold">R / Tidyverse Integration</span>
                <button
                  onClick={() => handleCopyCode('R', rSnippet)}
                  className="px-2.5 py-1 rounded bg-[#02102e] hover:bg-[#ffc300]/20 text-[11px] font-mono-code text-[#e0eaff] flex items-center gap-1 border border-[#e0eaff]/15"
                >
                  {copiedCode === 'R' ? <Check className="w-3.5 h-3.5 text-[#ffc300]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === 'R' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-[#02102e] border border-[#e0eaff]/15 text-xs font-mono-code text-[#e0eaff] overflow-x-auto">
                {rSnippet}
              </pre>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-code text-[#ffc300] font-bold">Python / Pandas Integration</span>
                <button
                  onClick={() => handleCopyCode('Python', pythonSnippet)}
                  className="px-2.5 py-1 rounded bg-[#02102e] hover:bg-[#ffc300]/20 text-[11px] font-mono-code text-[#e0eaff] flex items-center gap-1 border border-[#e0eaff]/15"
                >
                  {copiedCode === 'Python' ? <Check className="w-3.5 h-3.5 text-[#ffc300]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode === 'Python' ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-[#02102e] border border-[#e0eaff]/15 text-xs font-mono-code text-[#e0eaff] overflow-x-auto">
                {pythonSnippet}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
