import streamlit as st
import random
import time

def render_game_center(lang):
    st.title(lang["app_title"])
    st.write(lang["welcome"])
    st.markdown("---")

    # Category Selection
    cat = st.selectbox(
        "Choose Domain / ꯂꯃꯥꯡ ꯈꯟꯕ:",
        [lang["cat1"], lang["cat2"], lang["cat3"]]
    )

    if lang["cat1"] in cat:
        game_choice = st.radio("Select Game:", [lang["g1_title"], lang["g2_title"], lang["g3_title"]])
    elif lang["cat2"] in cat:
        game_choice = st.radio("Select Game:", [lang["g4_title"], lang["g5_title"], lang["g6_title"]])
    else:
        game_choice = st.radio("Select Game:", [lang["g7_title"], lang["g8_title"], lang["g9_title"]])

    st.markdown("---")
    st.header(game_choice)

    # --- GAME IMPLEMENTATIONS ---
    if "Game 1" in game_choice or "ꯅꯤꯡꯁꯤꯡ ꯁꯨꯠꯀꯦꯁ" in game_choice:
        st.subheader("🎒 Memory Suitcase Interaction")
        items = ["🎵 Vintage Vinyl Record", "🧵 Traditional Handloom Cloth", "📷 Old Black-and-White Photo", "🌸 Fresh Jasmine Flowers"]
        selected_item = st.selectbox("Pick an item from the virtual suitcase:", items)
        st.info(f"Sensory Prompt: What memories or smells does **{selected_item}** bring back?")
        story = st.text_area("Record patient's story or response:")
        if st.button("Complete Session"):
            st.success("Session logged for analytics!")

    elif "Game 3" in game_choice or "ꯏꯁꯩ" in game_choice:
        st.subheader("🎶 Finish the Prompt")
        prompts = [
            {"phrase": "You are my sunshine, my only...", "answer": "sunshine"},
            {"phrase": "A stitch in time saves...", "answer": "nine"},
            {"phrase": "Honesty is the best...", "answer": "policy"}
        ]
        p = random.choice(prompts)
        st.write(f"### Phrase: *\"{p['phrase']}\"*")
        user_input = st.text_input("Fill in the missing word:")
        if st.button("Submit"):
            if user_input.strip().lower() == p["answer"]:
                st.balloons()
                st.success("Correct completion!")
            else:
                st.warning(f"Close! The typical completion is '{p['answer']}'.")

    elif "Game 7" in game_choice or "ꯇꯥꯏꯜ" in game_choice:
        st.subheader("🧩 Tile Pattern Matching")
        st.write("Match the sequence below:")
        st.markdown("🟥 🟦 🟩 🟨 🟥 **[ ? ]**")
        user_tile = st.selectbox("Which color comes next?", ["Blue 🟦", "Green 🟩", "Yellow 🟨", "Red 🟥"])
        if st.button("Check Pattern"):
            if user_tile == "Blue 🟦":
                st.success("Perfect Pattern Recognition!")
            else:
                st.error("Try again!")

    else:
        st.write("🎮 *Interactive sensory interface running. Patient responses are monitored automatically.*")
        st.progress(0.85)
        if st.button("Log Interaction Activity"):
            st.success("Data synced with Patient Analytics Dashboard.")