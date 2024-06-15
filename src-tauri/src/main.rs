// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{Manager, Window};
// Create the command:
// This command must be async so that it doesn't run on the main thread.
#[tauri::command]
async fn close_login_window(window: Window) {
  // Close Application As Login is neccessary
  window.get_window("login").expect("no window labeled 'login' found").close().unwrap();
  window.get_window("main").expect("no window labeled 'main' found").close().unwrap();
}
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![close_login_window])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
