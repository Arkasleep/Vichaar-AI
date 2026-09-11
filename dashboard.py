import streamlit as st
import pandas as pd
import ai_engine

def render_dashboard(lang):
    st.title("📊 Patient Analytics & Clinical Dashboard")
    st.write("Track engagement, accuracy, and longitudinal response metrics per numbered game.")
    st.markdown("---")

    # Sample Session Data Across Games
    data = {
        "Game # & Name": [
            "Game 1: Memory Suitcase",
            "Game 2: Photo Matching",
            "Game 3: Finish the Song",
            "Game 4: Tactile Sorting Boxes",
            "Game 5: Nostalgic Scent Jars",
            "Game 6: Fidget Boards",
            "Game 7: Large Tile Patterns",
            "Game 8: Categorization Sorting",
            "Game 9: Jumbo Word Search"
        ],
        "Sessions": [14, 10, 22, 8, 5, 12, 18, 9, 16],
        "Avg Latency (s)": [4.2, 3.8, 2.1, 5.0, 4.5, 3.1, 3.4, 4.8, 3.2],
        "Completion %": [100, 90, 95, 88, 80, 100, 92, 85, 94]
    }

    df = pd.DataFrame(data)

    col1, col2 = st.columns([2, 1])

    with col1:
        st.subheader("Game-by-Game Performance Breakdown")
        st.dataframe(df, use_container_width=True)

    with col2:
        st.subheader("Key Overview Metrics")
        st.metric("Total Exercises", f"{df['Sessions'].sum()} sessions")
        st.metric("Overall Accuracy", "91.5%", delta="+2.3%")
        st.metric("Avg Response Time", "3.7 sec", delta="-0.6 sec")

    st.markdown("---")
    st.subheader("🤖 AI Longitudinal Trajectory Engine")
    
    # Run AI Prediction Engine
    prediction = ai_engine.predict_patient_trajectory(df)

    st.markdown(f"**Current Trend:** `{prediction['status']}`")
    st.info(prediction["summary"])
    st.write(f"**Clinical Recommendation:** {prediction['recommendation']}")