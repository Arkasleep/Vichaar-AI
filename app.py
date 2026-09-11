import streamlit as st
import json
import os
import languages
import dashboard
import ai_engine
import games

st.set_page_config(page_title="CognitiveCare NE", layout="wide", page_icon="🧠")

# Load persistent settings
SETTINGS_FILE = "user_settings.json"

def load_settings():
    if os.path.exists(SETTINGS_FILE):
        try:
            with open(SETTINGS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {"language": "Meitei", "save_preference": False}

def save_settings(lang_code, save_pref):
    if save_pref:
        with open(SETTINGS_FILE, "w", encoding="utf-8") as f:
            json.dump({"language": lang_code, "save_preference": True}, f)
    else:
        if os.path.exists(SETTINGS_FILE):
            os.remove(SETTINGS_FILE)

# Initialize Session State
if "settings" not in st.session_state:
    st.session_state.settings = load_settings()
if "current_lang" not in st.session_state:
    st.session_state.current_lang = st.session_state.settings.get("language", "Meitei")

# Language Setup
lang_data = languages.LANGUAGES.get(st.session_state.current_lang, languages.LANGUAGES["English"])

# --- TOP NAVIGATION & LANGUAGE BAR ---
st.sidebar.title(f"🧠 {lang_data['app_title']}")
st.sidebar.markdown("---")

st.sidebar.subheader("🌐 Language Settings / ꯂꯣꯟ ꯈꯟꯕ")
selected_lang_name = st.sidebar.selectbox(
    "Select Language",
    options=list(languages.LANG_MAP.keys()),
    index=list(languages.LANG_MAP.values()).index(st.session_state.current_lang)
)
selected_lang_code = languages.LANG_MAP[selected_lang_name]

if selected_lang_code != st.session_state.current_lang:
    st.session_state.current_lang = selected_lang_code
    st.rerun()

# Persistence Preference Controls
save_pref = st.sidebar.checkbox(
    "Save language preference for future sessions",
    value=st.session_state.settings.get("save_preference", False)
)

col_a, col_b = st.sidebar.columns(2)
if col_a.button("Save Settings"):
    save_settings(st.session_state.current_lang, save_pref)
    st.sidebar.success("Settings saved!")

if col_b.button("Reset"):
    save_settings("English", False)
    st.session_state.current_lang = "English"
    st.rerun()

st.sidebar.markdown("---")
page = st.sidebar.radio("Navigation", ["Game Center", "Patient Dashboard"])

if page == "Game Center":
    games.render_game_center(lang_data)
else:
    dashboard.render_dashboard(lang_data)