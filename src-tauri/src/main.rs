// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use webview2_com::Microsoft::Web::WebView2::Win32::ICoreWebView2Settings6;
use windows::core::Interface;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            window.with_webview(|webview| unsafe {
                let settings = webview.controller().CoreWebView2().unwrap().Settings().unwrap();
                let settings = settings.cast::<ICoreWebView2Settings6>().unwrap();
                settings.SetIsSwipeNavigationEnabled(false).unwrap();
            }).unwrap();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
