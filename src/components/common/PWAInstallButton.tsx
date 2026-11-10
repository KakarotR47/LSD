import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import {
  Download,
  Monitor,
  CheckCircle2,
  X,
  ExternalLink,
  Laptop,
  Check,
  FileCode,
  ShieldCheck,
  HardDrive,
} from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'topbar' | 'settings' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'topbar' }) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [exeDownloading, setExeDownloading] = useState<boolean>(false);
  const [exeDownloaded, setExeDownloaded] = useState<boolean>(false);
  const [zipDownloaded, setZipDownloaded] = useState<boolean>(false);

  const handleDownloadExe = () => {
    setExeDownloading(true);
    const link = document.createElement('a');
    link.href = '/download/SA_Brothers_Vendors_POS.exe';
    link.download = 'SA_Brothers_Vendors_POS.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setExeDownloading(false);
      setExeDownloaded(true);
      setTimeout(() => setExeDownloaded(false), 5000);
    }, 1200);
  };

  const handleDownloadZip = () => {
    const link = document.createElement('a');
    link.href = '/download/SA_Brothers_Vendors_POS_Windows.zip';
    link.download = 'SA_Brothers_Vendors_POS_Windows.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setZipDownloaded(true);
    setTimeout(() => setZipDownloaded(false), 5000);
  };

  // Render for TopBar
  if (variant === 'topbar') {
    return (
      <>
        <div className="flex items-center rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 shadow-xs border border-sky-400/30 overflow-hidden">
          <button
            onClick={handleDownloadExe}
            disabled={exeDownloading}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-white hover:bg-white/10 text-xs font-bold transition-all cursor-pointer active:scale-95"
            title="1-Click Download Standalone Windows SA_Brothers_Vendors_POS.exe"
          >
            {exeDownloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>{exeDownloading ? 'Downloading...' : 'Download Windows .EXE (57 MB)'}</span>
              </>
            )}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-2 py-1.5 text-white/80 hover:text-white hover:bg-white/15 border-l border-white/20 text-xs font-bold transition-all cursor-pointer"
            title="Windows Desktop App Options & Instructions"
            aria-label="Windows App Options"
          >
            <Laptop className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Windows Software Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 rounded-2xl border border-sky-200 dark:border-sky-800">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Native Windows Desktop Software</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                        Real .EXE • Standalone Window
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Runs directly in its own isolated desktop window on Windows 10 &amp; 11. No browser address bar, no localhost tabs, and works 100% offline.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                {/* Method 1: DIRECT DOWNLOAD STANDALONE .EXE (FEATURED) */}
                <div className="p-5 rounded-2xl border-2 border-sky-500/80 dark:border-sky-500/60 bg-gradient-to-br from-sky-50/80 to-indigo-50/40 dark:from-sky-950/40 dark:to-indigo-950/20 space-y-3 relative overflow-hidden shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-950 dark:text-sky-100 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-black">1</span>
                      Direct Standalone Executable (.EXE)
                    </span>
                    <span className="text-[10px] font-bold text-sky-700 dark:text-sky-300 bg-white/80 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                      Recommended • 57 MB
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    A true 64-bit Windows executable (<code className="font-mono font-bold text-sky-700 dark:text-sky-300">SA_Brothers_Vendors_POS.exe</code>). Double-click to run immediately on any Windows PC. It automatically opens the POS in a clean, dedicated application window — <strong>not in your web browser, no localhost errors!</strong>
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400 pt-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Opens in dedicated app window</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Saves data directly to your PC</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={handleDownloadExe}
                      disabled={exeDownloading}
                      className="w-full py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      {exeDownloaded ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Downloaded! Double-click SA_Brothers_Vendors_POS.exe to open</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>{exeDownloading ? 'Starting Download...' : 'Download SA_Brothers_Vendors_POS.exe (57 MB)'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Method 2: Portable ZIP Package */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px]">2</span>
                      Portable Desktop App Folder (.ZIP)
                    </span>
                    <span className="text-[10px] font-bold text-slate-700 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      24 MB Compressed
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Prefer a zipped package? Download the zip archive, right-click &gt; <strong>Extract All</strong>, then double-click <code className="font-mono font-bold text-sky-600 dark:text-sky-400">SA_Brothers_Vendors_POS.exe</code> to run anywhere (even on a USB flash drive).
                  </p>
                  <button
                    onClick={handleDownloadZip}
                    className="w-full py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{zipDownloaded ? 'Downloaded!' : 'Download Portable Package (.ZIP • 24 MB)'}</span>
                  </button>
                </div>

                {/* Method 3: Browser Native PWA App */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px]">3</span>
                      Instant Browser App Installation (PWA)
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      Zero Download Size
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Pins the POS into your Windows Start Menu, Desktop, and Taskbar. Opens in an isolated native window without browser address bars.
                  </p>
                  {isInstallable ? (
                    <button
                      onClick={() => {
                        install();
                        setShowModal(false);
                      }}
                      className="w-full py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-800 dark:hover:bg-slate-100"
                    >
                      <Monitor className="w-4 h-4" />
                      <span>Install as Desktop App Now</span>
                    </button>
                  ) : (
                    <div className="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      💡 In Microsoft Edge or Google Chrome on Windows, click the <strong>App icon</strong> in the URL address bar or select <strong>Menu (⋯) &gt; Apps &gt; Install this site as an app</strong>.
                    </div>
                  )}
                </div>

                {/* How to Run Instructions */}
                <div className="p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                  <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    How to Open Like Other Windows Apps
                  </div>
                  <ol className="text-xs text-slate-600 dark:text-slate-300 list-decimal list-inside space-y-1.5 pl-1 leading-relaxed">
                    <li>Download or pull <code className="text-emerald-700 dark:text-emerald-300 font-mono font-bold">SA_Brothers_Vendors_POS.exe</code> (also tracked in your GitHub repository).</li>
                    <li>Double-click the <code className="text-emerald-700 dark:text-emerald-300 font-mono font-bold">.exe</code> file directly on your computer.</li>
                    <li>The POS immediately opens in its own window with your data safely stored in <code className="font-mono text-[11px]">local_database/</code>.</li>
                  </ol>
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Render for StoreSettings
  return (
    <div className="p-5 rounded-2xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/40 dark:bg-sky-950/20 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-500 text-white rounded-xl shadow-xs">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Windows Desktop Software (.EXE)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Run this POS as an offline-capable, standalone Windows application (.exe) without opening browser tabs
            </p>
          </div>
        </div>

        {isInstalled && (
          <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Installed as App
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {/* Direct .EXE download card */}
        <button
          type="button"
          onClick={handleDownloadExe}
          disabled={exeDownloading}
          className="p-3.5 bg-gradient-to-br from-sky-600 to-indigo-600 text-white rounded-xl text-left transition-all shadow-xs hover:shadow-md flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold">
                {exeDownloaded ? '✓ Downloaded!' : 'Download .EXE (57 MB)'}
              </span>
              <Download className="w-4 h-4 shrink-0" />
            </div>
            <div className="text-[11px] text-sky-100 mt-1 leading-snug">
              SA_Brothers_Vendors_POS.exe — Double-click to run directly in its own app window.
            </div>
          </div>
          <div className="mt-3 text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded w-fit">
            Native Offline EXE
          </div>
        </button>

        {/* Portable ZIP Package download */}
        <button
          type="button"
          onClick={handleDownloadZip}
          className="p-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl text-left transition-colors flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {zipDownloaded ? '✓ Downloaded!' : 'Download Portable (.ZIP)'}
              </span>
              <Download className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
              Complete app folder with SA_Brothers_Vendors_POS.exe. Unzip &amp; run.
            </div>
          </div>
          <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded w-fit">
            Portable 24 MB
          </div>
        </button>

        {/* PWA App Install card */}
        <button
          type="button"
          onClick={() => {
            if (isInstallable) {
              install();
            } else {
              setShowModal(true);
            }
          }}
          className="p-3.5 bg-white dark:bg-slate-800 border border-sky-300 dark:border-sky-800 hover:bg-sky-50/50 rounded-xl text-left transition-colors flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-900 dark:text-sky-200">
                {isInstallable ? 'Install Browser App' : 'Desktop App Setup'}
              </span>
              <ExternalLink className="w-4 h-4 text-sky-600 shrink-0" />
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
              Adds Desktop icon &amp; runs in full app window without browser bars.
            </div>
          </div>
          <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/60 px-2 py-0.5 rounded w-fit">
            Browser PWA
          </div>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg shadow-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                How to Install on Windows
              </h3>
              <button onClick={() => setShowModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              In Microsoft Edge or Chrome on Windows, click the <strong>App icon</strong> in the address bar (or Menu ⋯ &gt; Apps &gt; Install SA Brothers POS) to pin it to your Windows Desktop and Taskbar.
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
