# Music video production brief and master prompt

**To start a new session**, attach this file, your final song mix, lyrics and any artwork. Paste this instruction:

> Follow the production checklist in this file. Start at Step 01. In your first reply, name the materials you can access and ask for the creative direction and essential choices that are still missing. Use any direction I give, and let me add or change it at any time. While answers are pending, continue useful reversible work; keep consequential unresolved choices visibly provisional and do not build dependent finals on them. Work through the steps in order, saving and checking each output. Use my creative direction and deliver the actual numbered files.

## Production checklist — start here

The **steps** give the order of work. The **sections** below the checklist explain how to do each step. Read the section named in the current row as needed. The examples illustrate technique. Take each project's style, cast, story and delivery choices from its own brief.

| Step | Action | Evidence needed to advance |
|---|---|---|
| 01 · Interview | Inventory the files you can open. Ask what the song means, what we should see and feel, and which styles or references fit. Gather the remaining essentials from §1. Continue reversible preparation while answers are pending; hold only choices that would lock story, identity, style or spend. | Save the agreed brief, available inputs, delivery specs, spending authority and review preferences. |
| 02 · Map the song | Analyze the final audio and align the lyrics. Cover the intro through the last decay (§2). | Save `Tension_Map.csv` and `Tension_Overview.png`. Check decisive markers against the recording. If transcription is used, preserve a separate timecoded transcript/lyric audit with uncertain and missing spans clearly flagged. Each section has timecodes, audible cues and an intended visual response. |
| 03 · Tell the story | Write the treatment and one card per sequence (§3). Tie the opening, turn and payoff to cue IDs. | Read the cards in order. Each change of place, time or character state has a cause or an intentional cue the viewer can follow. |
| 04 · Read Kling's limits | Read the signed-in account's metadata for the chosen tool and model (§5). Save its duration values and relevant mode restrictions. | A dated capability record identifies the legal render lengths within the project's 15-second cap. |
| 05 · Time the rough board | Build a shot list and full-song animatic with placeholders (§§2–5). Mark each shot's lyric, action, camera move, cut, handles and legal render duration. | Play the whole board with the master. Check the runtime, the story turn and the transition into each sequence. Revise weak beats here. |
| 06 · Establish the look | Inventory dependencies; build and review standalone character, wardrobe, prop/state, vehicle and location masters; only then build scene masters (§6). Invite artist direction before locking consequential designs. | Save distinct, versioned references and an impact map. Each dependent final has an approved standalone master/state and uses the actual approved references. |
| 07 · Prepare the hardest cut | Pick two or three consecutive production shots with a difficult handoff. Build numbered pilot stills from shot-specific approved reference packets and write the Kling prompts (§§6–7). Show the artist the references and pilot sequence for direction. | Review the pilot shots together for story, composition, camera intent and continuity. Resolve material design/story feedback before scaling generation to the remaining shot list. |
| 08 · Watch those shots moving | Within the agreed budget and applicable approvals, render and download those shots. Cut the actual takes over the intended lyric (§8). | Watch the excerpt at edit speed. Check emotion, sync, identity and geography. If the cut fails, repair the still, prompt or trim and review again. Keep the accepted shots. |
| 09 · Produce the other sequences | Repeat the shot loop below for each remaining shot (§§6–8). Replace placeholders on the timeline as files arrive. | Every planned shot ID has an accepted local still and playable watermark-free clip. Record its references, prompt and selected source frames. |
| 10 · Review the full cut | Watch the complete sequence with the final mix. Make the agreed editorial and finishing changes (§8). | Check the emotional turn, continuity, lyric sync and picture endpoint. Save the review cut and edit map. |
| 11 · Deliver | Reconcile the shot list with the files on disk and open the agreed deliverables (§9). | Report verified counts and link the local folders, tension map, edit map and delivery index. Identify any outstanding item explicitly. |

**Shot loop for Steps 07–09.** Select the shot and cue IDs → verify dependencies and approval status → load the actual shot-specific reference packet → prepare and inspect the numbered still → validate prompt, reference roles, continuity and duration → submit once and save the job ID → retrieve and download the successful take → watch it alongside its neighbors with audio → record selected frames and separate technical, creative, continuity and sequence statuses. If another shot depends on the exit pose, save the actual cut frame before building that shot. Never bypass the approved prop/state master gate for speed.

**Creative review gates.** The artist can give creative input at any point; the gates below are planned chances to shape the work before downstream effort depends on it, not limits on when feedback is welcome. Invite input on the visual treatment, story and sequence board, consequential cast/wardrobe/prop/location masters, representative stills, and the first moving excerpt. Present concrete candidates side by side where useful, explain the story or continuity trade-offs briefly, and ask what to keep, change, reject, or leave open. Record decisions and unresolved choices. If the artist requests a revision, revise the candidate and show it again before treating it as approved. Once a design or sequence is approved, continue autonomously on reversible production details that fit it; do not interrupt for routine prompt wording or every individual still. If the artist delegates a decision, record the delegation and proceed. Silence is not approval of a consequential recurring design.

**Open creative input while production is underway.** At each meaningful batch, show a compact contact sheet plus numbered filenames and a short note on any continuity/story decisions. Invite keep/change/reject feedback without making it a blocker for unrelated shots. Log the feedback against shot or asset IDs, revise affected work, preserve prior versions, and re-check neighboring cuts after a change. If the artist gives a new direction mid-batch, update the visual brief and prompts before producing more affected work; continue only work independent of that decision. Never interpret silence or a missed review as approval.

**Artist input at any point.** The artist may redirect the story, imagery, emotion, character behavior, camera, pacing, props, or style in plain language at any time; they do not need to use review labels or wait for a scheduled gate. Treat a new message during production as direction for the active project. First restate the actionable interpretation in the decision log, identify affected shot and reference IDs, then revise those materials and show the result for review when the change is consequential. Keep the earlier version and its status visible. Do not turn a proposal into a locked choice just because work has started, and do not stop unrelated work while a decision is open. The artist can approve, revise, reject, defer, or delegate each decision; an open-ended note is valid input and should be translated into concrete visual requirements without narrowing it to a forced either/or choice.

**Repeatable creative-input loop.** Use the five-step loop in §1 at intake, treatment, sequence-board, reference, pilot, batch and rough-cut reviews. The artist can redirect the project at any time, review selected items only, or delegate. Batch routine review, keep unrelated work moving, and never treat silence as approval of a consequential choice.

**Asset-first sequence for dependent finals.** Use this order whenever a recurring visual element matters to the story or is prominent enough to be recognized:

1. Extract every recurring character, wardrobe, hero prop, vehicle, machine and location from the treatment and shot manifest. Give each a stable ID and list the dependent shots in `Reference_Approval_Impact.md` before making final stills.
2. Generate and review the standalone masters first. For each one, make the intended design legible at useful size; create distinct views or story states when the shot plan needs them (for example open/closed, lit/unlit, carried/placed, clean/damaged). A crowded cast sheet, scene composite or single favorable angle does not establish unseen geometry.
3. Invite artist direction on consequential design choices with labeled, side-by-side candidates where useful. Record the exact decision and status in `Creative_Decisions.md` and `Reference_Register.csv`. A candidate remains a candidate until the artist approves it or explicitly delegates that choice. Do not use a rejected or superseded version.
4. After the component masters are approved, build location masters and scene-combination masters for recurring relationships and geography. Label what each reference controls. A scene master must not silently redefine a character, prop or set; update the relevant component master and its dependents when the design itself changes.
5. Before each final still, check its manifest dependencies against the approved register. Use only approved masters and required state variants, explicitly map each reference to its role in the prompt, and record the versions used. If a design is open, keep that shot as a clearly labeled proposal or hold it; do not present it as a continuity-cleared final.
6. After a master changes, identify every dependent still and neighboring cut, revise only the affected work, preserve previous versions and re-review those cuts before acceptance.

**Hard gate: build and lock recurring props before composing finals.** Do not generate a final still containing a recognizable recurring prop, vehicle, machine, or other story-critical object until its standalone master has been created, reviewed, and approved (or the artist has explicitly delegated that design decision). If the object has visually distinct states in the story, create and lock the needed state references from the approved base design first. Then make the scene/location composition master, if the object’s placement or the geography recurs, using the already-approved component references. Only after these steps may the numbered dependent stills be composed. A storyboard sketch or candidate composite can be used to discuss an idea, but it must be labeled provisional and must not be mistaken for a continuity-cleared final. If no approval is available, either hold that dependent shot or redesign it to keep the object genuinely out of frame without losing the beat; log the choice and show the revised sequence for creative review when the story meaning changes.

**Build a reference packet for every generated still.** Before image generation, create a small shot-specific packet from the actual approved image files: (1) identity/wardrobe references for every visible recurring character, (2) the approved standalone prop and correct story-state reference for every visible recurring object, (3) the approved location or scene master for recurring geography, and (4) the shot’s composition or preceding-frame reference when needed for the cut. Attach these images to the generation request whenever the tool supports image references; do not rely on prompt text, memory, a seed, or a montage to substitute for missing references. In the prompt and manifest, name each file and its exclusive job (identity, wardrobe, prop design/state, location geometry, or composition). Confirm the generator actually received the intended files before submitting. If a required asset is missing, unapproved, or not available to that generator, keep the shot provisional or redesign it; never silently improvise the recurring design and call the result final. **Treat crops as partial evidence:** a crop controls only visible content. Do not infer that a wardrobe detail, prop, or feature is absent because it falls outside the crop; consult the full approved master or a dedicated detail reference for that decision. Record any derived rule in the reference register and apply it consistently to all dependent shots.

**Prop-first generation gate checklist.** Before a dependent still can enter the finals folder, verify and record: `asset_id` and approved master version; approved state variant if applicable; artist/delegated decision status; actual reference files attached and their roles; scene/location reference version; and the resulting still’s match to the object silhouette, materials, scale, wear, orientation, light behavior, and contact points. Keep technical validation, visual/story acceptance, continuity clearance, and artist approval as separate fields. A missing gate means `HOLD` or `ARTIST_REVIEW_DIRECTION`, never final acceptance. When a prop is deliberately removed, record the new story beat and update the impact map, prompt, handoff, and neighboring-cut review before promotion.

If a prop or design element is incidental, reblock or reframe it out while retaining the dramatic function, then document the revised beat. If removal changes the story, hold only that shot and list its exact dependencies. Do not let an open design block independent shots.

**Acceptance labels describe separate checks.** Distinguish technical/file validation (correct ID, path, dimensions and readable file), visual/story review (composition, lyric beat and dramatic clarity), continuity clearance (all recurring designs match approved masters and states), artist approval (where requested or consequential), and final sequence acceptance (the cut works with its neighbors and audio). A still may pass one check while remaining provisional for another. Use explicit status fields or notes; never let “accepted” imply approvals that have not happened.

**Inspect every final still at native delivery resolution.** A contact sheet is for story order and composition comparisons only; it cannot clear fine continuity. Open each 1920×1080 still at native size (or inspect a lossless 100% view) before acceptance. Check every visible face, hair and scar side, wardrobe accessory and strap, hand/contact point, recurring object/state, background fixture or marker, unexpected text/logo, duplicate person/limb, and image-edge crop. Compare recurring characters/props directly against their approved standalone references. Record the inspection result and any correction by shot ID. After a correction, re-open the final-resolution file and recheck neighboring shots. Do not use a prior “full-size QC” note as a substitute if the actual frame has since changed.

**Run the process as a collaborative director's room.** The artist can shape story meaning, world rules, character choices, visual motifs, camera language, pacing, references and delivery at any stage. Do not treat the initial interview as the only chance to direct. Maintain `Creative_Decisions.md` as the source of truth: record date, decision-maker, item/shot IDs, keep/change/reject/open, the exact direction, rationale where supplied, status (`PROPOSED`, `APPROVED`, `REJECTED`, `SUPERSEDED`), and affected references, prompts, shots and neighboring cuts. Preserve prior versions and link the replacement. When a change touches a recurring identity, prop, location, story cause/effect, or sequence transition, update the reference register and impact map before generating dependent work. Recheck the affected shot pairs and timeline after revision. An artist can approve a broad direction while leaving reversible execution choices to the production team; record that boundary. Ask for a decision only when the choice is consequential and cannot be safely inferred or isolated. Keep independent work moving while a decision is open, and do not silently lock a consequential design by generating many dependent finals.

**Invite useful feedback.** Present review material at readable size with IDs and a short neutral description of what each option changes. Ask focused questions such as "keep, change, reject, or leave open?", "what feels wrong?", "which version best carries this lyric?", or "should this remain ambiguous?" Do not steer the artist toward the production team's favorite. Translate freeform notes into specific visual requirements, read them back in the decision log, then implement them. If feedback conflicts with an earlier approved choice, flag the conflict and affected work in the same update; continue only unaffected tasks until resolved. When a change is requested, show the revised candidate or affected sequence for review before treating the new design as approved. The artist may also volunteer input outside scheduled gates; capture and route it the same way.

**Keep your place.** After Step 01, maintain a short `Production_Status.md` and `Creative_Decisions.md` in the project records. Update the status after each step and during batches; log artist input, delegated choices, proposals, approvals and superseded decisions as they happen. On resuming a session, check the evidence files and query existing job IDs before continuing at the first unfinished action.

```text
Current step and shot IDs:
Completed work and local evidence paths:
Active jobs and IDs:
Missing input or decision, if any:
Next action:
```

Continue automatically within the agreed scope and budget. Ask the artist at agreed review points or when an input, decision or authorization is needed. If the master audio or an essential tool is unavailable, record the affected step as **waiting** and continue independent preparation. Mark provisional timing and unreviewed media explicitly. Advance when the evidence in the last column exists.


## 1. First response in the new session

Act as the director, cinematographer, editor, and production coordinator. Begin by naming the materials you actually have. Read the lyrics as creative source material. Ask these questions conversationally, combining related questions and skipping anything already answered. Wait for essential direction before locking the treatment; while answers are pending, continue independent reversible preparation. If the artist is undecided, offer two or three distinct treatments grounded in a specific lyric and let them choose or delegate.

**Resume an active production from its records.** If the project already has an agreed brief, do not repeat the interview or overwrite prior direction. Read the current status and decision log, inspect the actual files, and resume at the first unfinished action. Treat the artist’s new feedback as a live direction for this project and route it through the creative-input process above. Ask only for decisions that are consequential, unresolved, and cannot be inferred safely; keep independent work moving.

**Work in production order.** After the interview, map the recording and lyrics from the opening sample to the last decay. Use that map to present a one-page treatment and the opening, turning point and closing image. Build a rough timed board using sketches, placeholders or existing references. Revise its story and rhythm while shots are cheap to remove. Develop the approved visual references and the hardest connected shots into a moving excerpt. Watch that excerpt on the song before committing the remaining stills and renders. Replace placeholders with accepted footage as each sequence comes in. Bundle creative reviews at the points agreed with the artist and carry delegated decisions forward.

**Repeat the creative-input loop throughout production.** At treatment, story-board, reference, pilot, still-batch and rough-cut reviews:

1. Show a concrete artifact with readable IDs: a treatment, timed board, labeled design candidates, numbered stills/contact sheet, adjacent-cut board, moving excerpt or rough cut. Say what decision it informs and what is still provisional.
2. Invite open direction in plain language. “Keep, change, reject, defer or delegate” are optional shortcuts; the artist can give a new idea, ask a question, or review only selected items.
3. Read consequential feedback back faithfully, then log the direction, affected IDs, status and next action in `Creative_Decisions.md`. Confirm an interpretation before scaling it if it could materially alter story meaning or a recurring design.
4. Apply the direction to the smallest affected scope. Update references, prompts, manifests, impact maps and neighboring cuts as needed; preserve earlier versions and link replacements.
5. Show consequential revisions in sequence context before treating them as approved. Continue unrelated work while a choice is open. Do not promote a consequential candidate, infer approval from silence, or spend on dependent jobs before its design is resolved.

The artist is a creative participant, not an operator required for routine tasks. Bundle routine review to avoid constant interruptions, but accept new input at any time. Ask for a decision only when an unresolved choice changes story, recurring identity, spend authorization or delivery; otherwise make a reversible choice, record it and keep moving.

| Ask the artist | What the answer determines |
|---|---|
| What is the song about to you? Which line matters most? What should we feel at the opening, the turn, and the final image? | Point of view, emotional arc, final payoff. Ask about meanings the artist wants left open. |
| What world and visual medium do you imagine? Which two or three references fit, and what do you like in each? What would feel wrong? | Art direction, era, realism or stylization, palette, texture, light, wardrobe, framing. Ask whether the cover is a literal world, a palette reference, or just branding. |
| Who or what carries the story? Should we show the artist, a band, instruments, choreography, lip sync, actors, or an entirely visual motif? | Cast, performance style, reference needs, casting boundaries. Decide how literal or symbolic the lyrics should be. |
| Who or what must the viewer recognize when it returns? Do you have a definitive likeness, outfit, object, or location? When should its appearance change, and what should still identify it afterward? | Agreed visual references, recurring sets, story-driven changes, and which designs the artist wants to select personally. |
| Where should the camera feel intimate, restless, bold, or still? How fast should the edit feel, and is there a moment you want to see play uninterrupted? | Camera language, pace and where to spend the longest takes. |
| Which exact recording and lyric version are final? Are there timestamps, an arrangement sheet, intentional silences, ad-libs, or a version-specific ending? | Sync source, timeline start, musical landmarks. Request the final audio if it is missing. |
| Where will this play, who will edit it, and what should be in the delivery? What are the deadline, credit budget, and review preferences? | Frame size, aspect ratio, frame rate, safe areas, audio, titles, captions, separate clips, editor format, optional finished master, approval and spending authority. |

**Save the agreed brief.** Record title/version, audience and destination, one-sentence premise, creative choices, must-have moments, exclusions, permitted reference uses, final audio file, output specs, deadline, spend ceiling, editor, and which decisions the director can make. Confirm a writable delivery folder. A useful starting proposal for a landscape editor handoff is individual 1920×1080 stills and clips, consistent frame rate, clean picture, and the original song as a separate track. Let the project decide the format. Previous projects supply workflow lessons only.

## 2. Build the edit from the recording

Use the actual song file as the clock. Record its version, measured runtime, sample rate, timeline frame rate and start convention. Keep the original audio and place it once on the edit timeline. If the only source is a lyric sheet, develop an untimed treatment and flag timings as provisional. Obtain the recording or artist-confirmed cue times before committing a full timed render budget.

1. Listen through for structure and feeling before assigning shots. Mark intro, verses, pre-choruses, choruses, instrumental changes, bridge and outro **as present in this recording**. Mark pickups, held syllables, breaths, rests, offbeat accents, and changes in delivery. Check automated lyric alignment by listening at phrase boundaries.
2. Make a cue sheet with one row per meaningful phrase or instrumental event. Include cue ID, time in/out, lyric fragment or event, intended meaning, energy, audible anchor, what the viewer should realize, and eventual shot IDs. Give repeated lines separate cue IDs. A shot may span several lines and a single line may motivate several cuts.
3. Decide what lands on each important cue. Choose the cut, the actor's decision, the moment the object is revealed, or the instant the camera comes to rest. For example, start a reach on the pickup and let the fingers release on the stressed word. Give the reaction the held vowel that follows.
4. Mark intentional anticipation and delay. If the vocal names a loss, seeing the empty chair a beat before the word can build dread. Seeing it just after the word can feel like recognition. Choose one and record the reason.
5. Check the entire timeline at the chosen frame rate. Use inclusive in / exclusive out intervals. Cover the beginning, silences, instrumental passages, tail and final frame. Count a dissolve's overlapping frames once in the edit. List deliberate black or held frames explicitly. If the mix changes later, update the cue sheet and affected shots before rendering.

### Create the timecoded tension map before designing stills

Use the final stereo WAV or MP3 and matching lyric sheet. If aligned vocal or drum stems are supplied, use them to pinpoint masked syllables or hits, then confirm their positions against the master. Use the production timeline's frame rate and start time. Store elapsed audio seconds alongside editor timecode (`HH:MM:SS:FF`, with the appropriate drop-frame convention when applicable). Note any leading silence or timeline offset so the same cue lands on the same frame in the editor.

### Optional transcription and tool access

Speech recognition (for example, Whisper or another locally available transcriber) can provide a rough transcript with phrase or word timestamps. It is a navigation aid: sung vocals, backing vocals, effects, and repeated lines can cause omissions, invented words, or false timestamps. The supplied lyric sheet remains the text authority; the master recording remains the timing authority. Compare proposed phrase boundaries against the audio, and manually verify every word-level marker that will drive a cut, gesture, or reveal. Never describe machine alignment as verified until it has been checked against the recording.

Use transcription only when it is available through the current approved tools and environment. Check available disk space before installing or caching anything. Do not change system permissions or request elevated access merely to make an optional analysis package work. If transcription is unavailable, restricted, too costly, or unreliable on singing, continue with a listening pass, waveform/loudness/onset cues, the lyric sheet, and clearly labeled provisional phrase windows. This does not block the story treatment or broad sequence plan; it does mean exact vocal timing remains unverified until listened through. Record which method was used, the model/tool if applicable, known limitations, and the specific timing checks still outstanding in `Production_Status.md`.

When a transcript is produced, save the raw segment/word timestamps and a separate audit such as `ASR_Lyric_Anchor_Audit.csv` in `01_Audio_Lyrics/`. Keep the recognized text beside the closest supplied-lyric passage, plus an explicit match/review label and any untranscribed gaps. Do not replace lyric-sheet wording with recognition output, infer missing lines, or transfer uncertain segment edges directly into `Tension_Map.csv`. The audio remains the timing authority; the audit is a navigation aid until a person checks the relevant boundaries against the master.

**If a first pass misses sung passages, diagnose the gaps before retiming.** Keep the first raw transcript. If a larger model is already available locally and the expected benefit justifies the time, run a second full-track pass, then targeted chunks only on the remaining gaps. Preserve timestamps and model settings for each pass in separate files. If a cached decoder rejects the audio container, convert a temporary copy with FFmpeg to a supported PCM format and pass that decoded audio to the model; do not reinstall packages or change system permissions for an optional step. Compare the output to the supplied lyrics and flag likely hallucinations, repeated-line confusion, lyric/audio version mismatch, and long untranscribed intervals. A stronger model can still fail on singing. When transcript and lyric sheet disagree, leave those cue and shot times provisional and resolve the source version or listen through the master before editorial lock.

Automated analysis can also summarize coarse energy, loudness, tempo, onset density, and likely arrangement changes. These measurements do not determine emotional tension: a quiet pause may raise anticipation while measured energy falls. Treat tension as the director's interpretation of the sound and lyric, keep it separate from measured energy, and verify every meaningful transition by listening to the master.

### Session record example — Carry The Fire

For the supplied Carry The Fire master, FFprobe confirmed a 359.424-second, stereo, 48 kHz MP3. Local Whisper was used to suggest lyric timing because word-level cues can help place picture edits. The cached `faster-whisper-medium` model ran on CPU/int8 against FFmpeg-decoded 16 kHz mono PCM after its bundled PyAV decoder rejected the MP3 API; it returned 44 English segments. A second full-track pass with cached `faster-whisper-large-v2` returned 31 segments and word timestamps. A targeted medium-model pass on three difficult PCM ranges still omitted words and produced likely hallucinations. The larger pass usefully anchors the opening verse, two pre-choruses, two choruses and first bridge, but coverage degrades sharply later. The provisional `Lyric_Line_Anchor_Map_Provisional.csv` is an ordered fuzzy text match; its similarity score is not confidence and it is not forced alignment. This case also exposed a serious clock mismatch: the older equal-allocation shot map puts Chorus 1 at 31.991–49.397 seconds, while the larger-model vocal anchors suggest about 63.84–88.74 seconds. Do not cut to those old provisional in/out values. The later audio has an apparent lyric-sheet mismatch or recognition gap from about 217 seconds onward; compare the actual recording to the supplied lyric sheet before retiming. The detailed current findings and gaps are in `Audio_Analysis_Report_2026-11-20.md`. The lyric sheet remains the text authority and the master recording remains the timing authority; manually listen to every decisive cue. Separately, two 180-row, 2-second summaries were produced: `audio_energy_2s.csv` records RMS loudness; `Audio_Feature_Map.csv` adds low-, mid- and high-band energy, spectral centroid, spectral flatness, and positive spectral flux. These are coarse acoustic measurements, not beat detection or emotional tension. The 1–5 tension curve is director-led and remains provisional until the lyrics and important transitions are checked against the master.

1. **Map what can be heard or measured.** Mark section boundaries, pulse and tempo changes, prominent beats and accents, relative loudness, builds in arrangement density, instrument entrances and dropouts, breaths, pauses and held notes. Listen back around changes suggested by waveform, loudness, onset or beat analysis. In passages with a loose pulse, mark the audible event directly. Align each lyric phrase to the recorded vocal and time individual words or syllables where an edit depends on them. A transcriber may suggest boundaries; manual listening confirms them. Mark estimated or unreviewed times as provisional rather than presenting them as exact.
2. **Interpret the tension by phrase.** Describe whether anticipation builds, holds, peaks or releases, and why. Consider vocal delivery, unresolved harmony, repetition, a delayed downbeat, lyrical meaning or an exposed silence. On the overview, draw musical energy and interpreted tension as separate tracks. A drum dropout may lower energy while anticipation rises. If using a 1–5 tension scale, anchor it to moments in this song and label it as the director's reading. Flag uncertain lyric alignments, ambiguous events and readings the artist may want to change.
3. **Give each important cue a visual consequence.** Name what should land, down to the actor's gesture, camera stop, focus shift, reveal, hold or cut. Record its target timeline timecode and any intentional lead or lag in frames. More than one cue can belong to the same shot. Identify the pose and framing the opening still must provide, the state needed at the cut, and how much screen time the action needs. In the motion prompt, translate the target to seconds from the source clip's start, including its head handle. Check the actual rendered action against the music in the edit.

**Save two local deliverables in `01_Audio_Lyrics/`.** Write the existing cue sheet as `Tension_Map.csv` with one row per meaningful lyric phrase or instrumental event. Use a shared cue ID for related markers or shot references. Export `Tension_Overview.png` as a full-song timeline with section labels, energy changes, the interpreted tension curve and the IDs of the decisive moments. Keep precise timings in the CSV so the editor can recreate the markers.

```text
Cue ID | Section | Lyric fragment or instrumental event | Audio in/out seconds
Timeline in TC | Timeline out TC (exclusive) | Audible anchor TC | What is heard
Energy change | Tension change and reason | Confidence / check needed
Visual event | Visual target TC | Offset from anchor (frames) | Shot ID(s)
Opening still requirement | State at cut / next shot
```

**Illustrative cue at 24 fps, timeline starting at zero.** In a phrase spanning `00:01:11:00–00:01:14:00`, the last drum hit lands at `00:01:12:12` (72.500 s). The drums drop away and the next word enters at `00:01:13:06` (73.250 s). Mark the percussion dropout as a fall in energy and the exposed pause before the admission as rising tension. Start the shot with the character walking and enough lead room for a tracking move. Brake the camera on the last hit, hold the face through the 18-frame gap, then cut to the listener on the word. The two audible anchors each have a visual target with zero-frame offset. If the director wants the listener to anticipate the admission, move the cut two frames earlier and record that choice.

Before generating the first sequence's stills, scrub its decisive cue markers against the master and check that the planned opening poses leave room for the marked actions. If the recording changes, version the map and recheck the affected cues before animating those shots. With lyrics alone, label any preliminary ideas untimed and wait for the recording to produce the measured map.

### Give the whole song a visual rhythm

Lay the song sections side by side. Under each, write the audience's **new understanding**, the performer's **energy**, the **distance between viewer and subject**, and the moment the section hands us into the next one. Read that row across the whole song. Decide where to withhold an image, where to let a phrase play in a single take, and where the visual peak belongs. A loud final chorus can carry a quiet close-up if the face delivers the payoff that the first chorus promised.

Use lyrics as subtext as well as subject matter. If the singer insists “I’m fine,” a person setting two places for dinner, then quietly returning one plate to the shelf, can carry the line. Test an image by asking what a viewer learns *during* it. If the answer repeats what the previous shot already taught, combine them or give the new shot a consequence. Let a recurring image gain meaning through its changed context.

## 3. Write a story that can be followed through the cuts

Write the treatment in five or six sentences. Establish whose experience we share, what they want or avoid, what disrupts them, what choice they make, what it costs, and what changes in the closing image. For abstract, dance, or performance-led work, give the motif or choreography an equally legible progression. A movement performed alone, resisted by a group, then completed together can carry an entire story.

Divide the film into **sequences**. A sequence covers one dramatic change and can cross musical sections. Give each a short card:

```text
Sequence / cue range / timeline in–out:
Location, time, point of view and opening state:
What the audience knows coming in:
What the subject wants; obstacle or source of tension:
Visible choice, action or discovery:
What changes by the end:
Because this happened, the following sequence begins with:
Returning image or gesture and what it means this time:
```

Read the cards aloud in order, joining them with “because” or “therefore.” Fix gaps where the link is only “and then we see another image.” At a location or time jump, plant a destination, decision, visual detail, or sound cue before the cut. In the receiving scene, reveal enough geography or behavior to orient the viewer. For a repeated chorus, choose one recurring composition or gesture and change one meaningful thing each time: who initiates it, who witnesses it, or what it costs. Write the final image at this stage so the opening can plant its meaning.

**Find the image that belongs to this song.** Choose a lyric, memory, gesture or visual contradiction from the artist's answers. Design one shot that would lose its meaning if transplanted into a different song. Write what we see first, what the performer or camera reveals next, and what the audience understands on the last frame. Plant an earlier detail that makes this reveal possible. Give this shot priority when allocating reference work, rehearsal time and credits.

## 4. Design coverage and the handoff at every cut

Plan in groups of neighboring shots. Draw a quick overhead map for each recurring space. Mark camera side, subject and prop positions, doorways, direction of travel, main light and eyelines. Choose the side of the action axis from which left and right read consistently. If the camera crosses that axis, show it crossing in the take or use a neutral view that re-establishes both sides.

Give every shot a single editorial job such as establish, pursue, reveal, interrupt, react, decide, or resolve. Write **what the audience learns and the exact frame or action that earns the cut**. Cover a complicated action with the angles the editor actually needs. A wide can establish the geography, a moving medium can carry the choice, and a close reaction can show the cost. A continuous master may do all three through blocking and a change in framing.

For every adjacent pair, write a one-line **handoff** and choose a cut type:

| Cut | Record for outgoing and incoming shots |
|---|---|
| Match on action | Who moves, with which hand or foot, in which screen direction, and at what phase to cut. Render a little of the same action on both sides so the editor can select the matching frame. |
| Eyeline / point of view | Who looks, their screen side and look direction, the target's position and distance, and the reverse angle or reaction that confirms what they saw. |
| Graphic or motion match | Exact shape, frame position, approximate size, or motion vector shared across the cut. Identify the first new detail that reveals the change of place or time. |
| Reveal through an obstruction | What crosses the lens, which edge it enters and exits, how much it covers, and what the viewer discovers on the other side. Give the foreground object depth in the still. |
| Hard contrast, time jump or dissolve | Why the discontinuity matters, the audible cue or visual anchor that carries us across it, and the landmark that orients us after it. Budget picture handles on both sides for a dissolve. |

**Pair review.** Put the outgoing end pose next to the incoming opening still. Check direction, framing, eyeline, light, costume, prop hand, actor position, emotional state and action phase. Write the intended difference explicitly. If the cut is hard to read, change the angle, blocking, or receiving frame while the images are inexpensive to change. Repeat this check with actual moving clips later.

**Give the editor a way through a difficult beat.** Identify the one shot the sequence depends on and mark the exact moment most likely to fail, such as two hands passing a small object. Plan a second way to tell that beat using existing coverage first. In the platform example, cut from Nia extending the letter to Jo's eyes dropping, then reveal the letter already in Jo's hand as she looks up. The audience infers the exchange and still sees what it means to Jo. Budget a pickup only if the available coverage cannot make that cut. For action, establish the target and distance before accelerating and show a consequence or reaction after the impact.

## 5. Choose duration and camera movement together

### Read the duration options before locking the shot list

Use the authenticated CLI's `tool_list` to confirm the generation tool, then read `who_am_i` for the current account. Under `availableModels` (or `available_models`), find the tool, its selected model, and the `arguments` entry named `duration`. Read its **`allowedValues`**, unit, default and any conditions that apply to the planned resolution, input roles, or single/multi-shot mode. Record the date, tool, model, allowed seconds and applicable conditions in the production record. Refresh the record after a model, tool, account or relevant mode change, or a parameter rejection. If the options are unavailable or ambiguous, continue planning edit beats and defer paid submission until the allowed lengths are confirmed.

**Account snapshot for comparison.** The authenticated CLI returned these values for `image_to_video` on 20 November 2026. An interval in this table means **every whole second** in the interval was explicitly listed. Future sessions should use their own live response.

| Model listed under `image_to_video` | Allowed render seconds | Within this project's 15 s cap |
|---|---|---|
| Kling 2.5, 2.6 | 5 or 10 | 5 or 10 |
| Kling O1 | 3–10 | 3–10 |
| Kling 3.0, 3.0 Omni, 3.0 Turbo | 3–15 | 3–15 |
| Kling 4.0 | 3–30 | 3–15 |
| Kling 4.0 Flash | 3–20 | 3–15 |

The standard Kling 3.0 duration description says longer durations *may* require `prefer_multi_shots`. Check that condition when planning an unbroken take. Other generation tools have their own model entries.

**Choose and validate each shot.** Add edit frames and required handle frames, then divide by the timeline frame rate to get the minimum source seconds at normal playback speed. From the live allowed values that satisfy the shot's settings and the artist's cap, choose the smallest value that covers that minimum. Assign any spare frames to trim allowance. Save the chosen seconds in the manifest, use that same value in the Kling request, and check membership again before submission. If no value fits, redesign the coverage or revise the handles on the timeline. Update the stills, end pose, prompt timing and estimate together.

For example, a 7 s edit plus two 1 s handles needs 9 s of source. On the verified 4.0 model, request 9 s. On the verified 2.6 model, request 10 s and keep the extra second for trimming. A 12 s uninterrupted edit cannot fit 2.6's longest source even with zero handles. Plan a cut and its matching stills, or choose an approved model and mode that supports the take.

Track **edit duration** (frames used on the song timeline) and **render duration** (the source clip including handles). Time the performance against the recording: setup → decision or action → consequence. Add head/tail handles where a trim, movement match, dissolve, or sustained reaction needs them. Choose the shortest supported render length that fits this performance **and** its handles. Use up to **15 seconds per generated clip** when the scene earns it. A brief insert may use less than the model's minimum in the finished edit.

| Creative timing range (choose a legal render length above) | What can justify it | Camera or performance decision |
|---|---|---|
| 3–4 s | Insert, visual punctuation, interruption, quick reaction | Begin close to the action. Land one unambiguous change. |
| 5–7 s | A gesture followed by a readable response, short pursuit, one reveal | Let the subject initiate the move. Settle long enough to catch the response. |
| 8–11 s | Tracking shot through a space, tension that builds before a decision, an exchange in two planes | Use blocking or a foreground pass to change what the audience can see mid-take. |
| 12–15 s | A sustained performance or continuous action whose emotional effect depends on watching the change happen | Design an opening position, a middle turn on a musical cue, and a distinct ending composition. Budget handles inside the cap. |

If a 15-second **edit** also needs handles, redesign the coverage, overlap another shot, or choose an edit point that works without handles. If the selected model offers different increments, choose a supported duration and trim to the frame in the edit. A shorter supported model can cover a long beat with planned cuts. Agree on a different model if an unbroken long take is essential. Allocate the shot count after timing the story. Raw footage can exceed the song runtime.

**Put the decisive action inside the selected frames.** A handle is spare footage the editor can trim. A nine-second render with one second of handle at each end gives a seven-second edit from source second 1 up to second 8. If the lyric accent occurs five seconds into this edit, aim the corresponding gesture at source second 6. Mark the actual frame where it lands after rendering and adjust the source in/out against the song. When a retime is needed, inspect hands, footfalls, lip sync and camera speed through the adjustment.

### Direct the camera like a person with a reason to move

In each shot specify **whose attention guides the camera, where the lens starts, what triggers movement, its path relative to the subject, how its speed changes, and the composition where it lands**. Use lens and rig descriptions to express visible results. A wide lens close to a moving subject gives strong foreground parallax. A distant long-lens view compresses the crowd around a face. Focal lengths are aesthetic guidance unless the tool provides a real optical control.

| Dramatic need | A playable camera and performance direction |
|---|---|
| Urgency | Start knee-high beside a runner. Accelerate as the back foot pushes off, track level with the hip as pillars cross foreground, then brake when the runner spots someone. Keep the destination on the same side of the frame. |
| A power shift | Begin over the seated person's shoulder. As they stand and take the floor, arc a quarter turn on the established side of the axis. Land low in a two-shot with the previous speaker small in depth. |
| Recognition | Hold the near subject sharp as their gaze lifts. On the breath, rack focus to the person they spotted in the far doorway. Hold the frame as that person recognizes them. |
| Intimacy | Keep the camera nearly still at eye level. Let the performer lean into focus, begin to speak, reconsider, and lower their hand. Cut when their partner understands. |
| Release or escalation | Follow a dancer from behind a partition into open space. Rise as they commit to the leap. Land in a wide that finally reveals the waiting ensemble. |
| Shock or dislocation | Let a motivated turn whip the camera toward its target. Use the peak motion for an edit only if the receiving shot continues the same vector and blur. A held, quiet aftermath can carry the next line. |

Read a whole sequence's camera directions together. If three setups have the same scale, speed, height and push, ask what each repetition expresses. Keep a deliberate refrain. For an accidental repeat, change the viewer's relationship to the action: switch to the target's viewpoint, let the subject overtake the lens, or hold wide and let something enter. Pick one dominant camera path per short clip. Use compound movement in a long take when each change follows visible action.

**Give the performer something to do to another person.** Choose a playable intention such as “keep her from leaving without admitting why.” Pick the moment the first tactic fails and a visible change of tactic: Nia tries to call out, sees Jo turn away, then runs. Decide whose reaction the audience needs and how long it takes to register. Direct the lens to witness that decision. For choreography, mark the supporting foot, direction of weight transfer, and landing accent. For visible singing, use the agreed recording and a supported sync workflow, then review mouth closure on consonants and sustained vowels on the timeline. Keep a usable reaction or alternate angle for a line whose sync fails.

## 6. Make stills that can become those shots

### Establish the cast and the set

Build a **continuity book** from the agreed art direction. Keep the original approved images as individual files that can be attached to the relevant generation. Contact sheets are convenient for an editor to compare views. Give each reference a stable filename and version so a later session or parallel worker can load the same source. Use the artist's supplied likeness or location photographs where agreed. For an invented cast or set, select a master design first and derive the other views from it. Check those views against the master before accepting them.

**Build the visual components before composing final stills.** Lock recurring character identity and wardrobe, then create a separate master for each recurring hero prop, then establish location geometry and lighting. A prop that appears only inside a lineup, a scene master or a crowded reference collage is not yet a production-ready prop reference: its shape can drift when the generator has to invent a new angle. Isolate the beacon, vehicle, map, emblem, tool, lamp or other story-critical object in its own reference image or sheet. Make the base design first; derive any required on/off, damaged/intact, folded/open or carried/placed states from it and record when each state applies. Only after the component masters are approved should the director compose them together into scene masters and shot stills.

**Run a reference-dependency check for every shot before holding it.** List the visible recurring assets the story actually needs, then map each to its approved master/state. If a candidate-only asset is incidental, revise the blocking or frame to omit it while preserving the lyric's dramatic action, and generate from approved references. If removing it would weaken or change the intended story beat, mark the shot held and name the exact approval dependency. Do not inherit every element from a composite reference: specify which details to retain and which composition/props to exclude. Revisit held shots when a revised prop-free version can satisfy the story. This keeps approval gates meaningful without freezing independent production.

| Produce | Include | How to use it |
|---|---|---|
| **Character sheet** for each recurring person | Clear front, three-quarter and profile views, a full-body view, and any expression or back view the story depends on. Record a few visible identifiers that survive different lighting or shot sizes, such as hairline, facial proportions, silhouette or habitual posture. Label asymmetric features on the person's **anatomical** left or right. | Use the nearest approved angle for a close-up, the body and wardrobe view for a wide, and a paired blocking still for a two-shot. Give each performer a distinct action and position when both appear. |
| **Standalone hero-prop reference** for every recurring or story-critical object | Show one object per image on a neutral, uncluttered background, at useful scale, with clean front/side/back or three-quarter views as needed. Record fixed silhouette, dimensions relative to a hand, material, color, wear, fasteners, light/emissive behavior and asymmetric details. Do not rely on a prop appearing inside a cast or scene composite as its only reference. | Attach the dedicated object reference to each still prompt that includes it. State that this image controls object identity only; the new shot reference controls composition and setting. Approve the base design before deriving story states or composing the object into final stills. |
| **Wardrobe and prop states** | Photograph or derive each meaningful state, such as coat dry/open, coat wet/fastened, letter folded, letter opened, beacon dormant/active, or lamp unlit/lit. Label who wears or holds it, which hand, contact points, and the story event that changes it. | Assign the appropriate state to each shot by **story time**. A flashback or repeated chorus can revisit an earlier state even when rendered later. Make state variants from the locked base prop; do not silently redesign the object between states. |
| **Location sheet** for each recurring set | Establishing wide, a clean view without cast, the reverse angle the edit needs, and a simple overhead sketch. Mark two or three permanent landmarks, entrances, actor marks, camera positions and physical light sources. Record time, weather, set dressing and practical lights for each scene state. | Derive new angles from the same layout. A window on the west wall stays on the west wall as the camera turns. Its screen position and the side of the face it lights can change. Use the map to work out what belongs in each view. |

For animation, puppets, abstract motifs or nonhuman leads, adapt the character sheet to proportions, construction, line weight, characteristic motion and permitted transformations. A silhouette or gesture may be the defining feature. Keep expressions, poses, camera heights and lighting free to change wherever the story calls for them.

### Generate related key stills from a scene master

Make one **master frame** showing how the approved elements fit together. Choose a useful production angle, often a wide or medium two-shot. Dress the cast, place the hero prop in the correct hand, establish scale against a landmark, and place the light source in the physical set. Compare this frame with the individual references. Save it at full resolution alongside the clean set image. For a return at night or after a major story event, derive and label the new state from the same set.

| What changes in the next still? | How to make it |
|---|---|
| Only framing, from the same viewpoint and instant | Crop the approved high-resolution frame when enough pixels remain for delivery. This preserves the actual face, prop and background. If the close-up needs more detail, use the crop for composition and an approved detail reference. |
| Same camera, new expression, hand position or prop state | Start from the accepted still. If the tool supports masks, edit the smallest useful region. Include contact points, shadows and reflections affected by the change. Inspect the surrounding image afterward. |
| New camera angle, or a move revealing another side | Build a fresh composition using the approved cast view nearest that angle and the corresponding set view or floor plan. Take wardrobe, scale and blocking from the scene master. If a newly visible side will recur, establish its design once and save that view. |
| Exact artwork, lettering, insignia or intricate prop detail | Reuse the approved source asset or photograph as a layer where practical. Match perspective, occlusion, light and shadow. Save the layered source for repairs. For a mark that must stay exact through motion, plan a tracked overlay in finishing. |

**Give each reference a job.** Tell the image generator which attachment supplies likeness, which supplies set geometry, and which supplies the current outfit or prop state. For two people, identify each by position and action. If only one image input is supported, use an approved assembled frame containing the visible elements for that setup. If the tool accepts only text, build the still with a reference-capable editor or compositing step. A repeated prompt or seed alone cannot guarantee matching people or objects across new viewpoints.

**Example image edit.** “Use the attached platform two-shot as the base. Nia is at frame left holding the folded cream letter in her right hand. Jo is at frame right by the striped pillar, with the red cuff on her left wrist. Jo now lowers her gaze to the letter. Keep the camera, light, both faces, distance between their hands and fold in the paper consistent with the base image.” For a reverse shot, supply the reverse set view and translate that same handoff into the new viewpoint.

### Generate project stills with GPT image generation

When the artist asks to generate images in GPT, use the built-in image-generation tool by default. Treat the supplied cast, set and prop images as reference inputs, and state the job of each reference in the prompt (identity, wardrobe, set geometry, prop state or visual style). Do not switch to an API/CLI workflow unless the artist explicitly chooses it. For each shot ask for one landscape 16:9 cinematic still composed for a 1920×1080 edit. The prompt is not proof of the returned dimensions: inspect the generated source, preserve it, then make a project copy at exactly 1920×1080. If the source is not 16:9, do not stretch it; use a composition-safe crop or approved background extension and inspect the result at full frame.

The built-in tool places new images under the current Codex generated-images directory by default. Move or copy every selected, project-bound image into the production folder, for example `04_Stills/001_Opening_Signal.png`, and record the original and final paths. Never leave a required still only in the default generated-images folder. Use one image-generation call for each distinct shot prompt. A multi-image count makes variants of one prompt; it is not a substitute for the separate actions, compositions and story beats in a shot manifest.

**Prevent reference-composition carry-over.** A reference may control more than the intended face or object: the generator can repeat its camera angle, grouping, background, prop placement or lighting. In every prompt, label each input by role and explicitly state what must be preserved and what must be ignored. For example: “Image 1 is identity and wardrobe reference only; preserve these people’s faces and clothing, but do not reproduce its bridge, table, group arrangement, camera position or lighting layout. Image 2 is the location and composition reference for this exterior.” Use a subject-only portrait or a tight, composition-neutral identity crop when a full group image keeps pulling the camera back to its original layout. Inspect every crop full-size before use: it must isolate the intended person or object and exclude neighboring faces, props and scene landmarks that are not meant to control generation. A filename or label alone does not make a crop composition-neutral. For distant silhouettes whose faces cannot be read, omit an unnecessary cast lineup reference and use the set/world reference to control the new composition. Pilot a compositionally difficult shot before releasing a large batch. Reject a frame that copies the wrong reference layout, strengthen the role instructions or change the reference inputs, then inspect the next result before resuming the batch.

**Reference approval and version gate.** A generated reference is a candidate until the artist explicitly approves it or delegates that decision. Save each distinct candidate with a new versioned filename; never reuse, duplicate, or relabel one candidate as a second reference. Present the candidate at its actual delivery size, invite specific keep/change/reject feedback, and offer a revised candidate when requested. Record `CANDIDATE`, `APPROVED`, or `REJECTED` in the reference register and keep unapproved and rejected versions out of shot-generation inputs. Only after approval, promote a copy to the stable master filename and record its version/hash. Downstream shots must cite the approved master version in their prompt and manifest. If a recurring design changes after shots depend on it, stop those shots, identify affected IDs, and present the impact and revised master for review before continuing.

**Reference roles for composed finals.** Give each input a narrow, explicit job. The character sheet controls likeness and wardrobe; the standalone prop master controls the object's design and story state; the location master controls geography and set dressing; the approved scene master controls their relationship only when that exact arrangement is intended. Do not ask one crowded image to control all four jobs. In the shot prompt, specify which details remain fixed, which may change, and explicitly reject any source framing, grouping, background or prop placement that should not carry over. A final that contains a recurring hero prop is not continuity-approved until compared with that prop's dedicated master.

**Distinct-reference check.** Before presenting a reference set, compare each image against the others at full frame and as thumbnails. Confirm each has a distinct, documented role and design; a new filename or crop does not make a duplicate a new reference. Reject accidental duplicates and composition clones unless the brief explicitly asks for matched views or a model sheet. When reviewing candidates, check both design continuity and whether the image establishes useful views/angles, not merely whether it looks cinematic.

### Parallelize independent stills with subagents only when requested

The director or artist may explicitly authorize parallel workers. Before dispatch, the coordinator freezes the treatment, cast and set references, visual style, output dimensions, numbered manifest, prompt versions, spend ceiling and destination paths. Split the manifest into fixed, disjoint shot-ID ranges; give every worker the same approved continuity assets and only its assigned rows. Never let two workers write the same shot ID or filename. Each worker uses one built-in image-generation call per unique still and reports the shot ID, exact prompt, reference filenames/roles, source image path, conform path and any rejected attempt. Do not let workers revise the shared treatment or renumber the central manifest.

Dispatch shots that rely only on approved, locked master references in parallel. Candidate or rejected references are never valid worker inputs. A shot that inherits a specific hand, prop, pose, camera axis or exit frame from its predecessor must wait for that predecessor's accepted still; then provide the actual accepted frame as a reference where supported. Keep these dependency shots in a later wave. The coordinator alone reconciles results into the central ledger, checks every image against its neighbors and recurring references, confirms exact 1920×1080 dimensions, and marks each shot accepted or needing repair. Parallel completion does not waive the same continuity and delivery checks required for serial work.

**Review stills together before animation.** Compare the master, candidate and edit neighbor side by side. At delivery size inspect faces, proportions, costume details, prop count and handedness. At thumbnail size check blocking, silhouette, architecture and light direction. Share a review sheet or a small sequence excerpt at agreed checkpoints so the artist can comment on story clarity, emotional read, composition, camera and continuity. If a single detail has drifted, repair that detail and recheck the pair; if the artist redirects the scene, update its story intent and dependent prompts before generating more. Save the accepted still, its input filenames and versions, what changed, and any mask or layer used. Feed that exact still into animation. Parallel workers can build independent shots once they share the approved masters and versions.

### Carry the state from one shot to the next

Keep a continuity ledger keyed to the shot list. Enter the **story state on arrival**, the visible change during the shot, and the **state on departure**. For a deliberate discontinuity, record its story reason and the first image or lyric that makes it legible. Attach the actual reference files to each job in the roles the selected tool supports. A character name or reference ID typed into a prompt is a production label and needs its corresponding image.

| Shot and references | State entering | Change on camera | State leaving / next cut |
|---|---|---|---|
| Platform 020 · Nia three-quarter, Jo profile, platform wide, folded letter | Nia has the letter in her right hand. Jo waits at the door beside the striped pillar, red cuff on her left wrist. | Nia runs toward Jo, slows and extends the letter. | Nia still owns the letter. Record the selected exit frame, the height of her hand and how far it is from Jo. |
| Platform 030 · same cast and wardrobe, tighter platform view, 020 exit frame for hand position | From the new angle, Nia's right hand continues the reach. The door and striped pillar retain their physical relationship. | Jo takes the letter with her left hand. Nia lets go, then sees Jo look up. | Jo owns the folded letter. Later inserts inherit that state until we see her unfold it. |

Use the **actual selected frame at the intended cut** as evidence. For a continuous camera move, an accepted exit frame can become the next opening image when supported. For a reverse or tighter angle, build a fresh opening still from the cast and set references, translating the recorded pose and hand position to the new viewpoint. A chain of renders can gradually change the face or architecture. Compare every new angle against the approved masters as well as the previous shot.

### Check the hardest sequence before scaling up

Choose two or three consecutive shots the edit already needs. Include a difficult change such as wide to close, a reverse angle, two people exchanging an object, or a face emerging from shadow. Build their opening stills first. Ask whether the viewer can recognize the same people and place without the song or filenames, and whether the camera can make the planned move through that space. Resolve discrepancies in the master or the affected still before animating. Use these shots for the first budgeted motion sequence in section 8.

Create one separate, full-resolution opening still per shot in the delivery aspect ratio. Give high-dependency shots a target end still as well. Add a midpoint reference for a demanding long take if the tool supports it. Where a precise cut depends on the end of a preceding render, treat the planned still as provisional and anchor the receiving shot to the **accepted outgoing frame or its observable state**. Return to master character references regularly to prevent accumulated drift.

**Compose for the move.** Put the subject in the starting pose *before* the decisive action. Leave lead room in the direction of travel, show clear space for hands and props, and place foreground, subject, and background at plausible distances. For a reveal, stage what initially hides the information and where it will be discovered. For a reaction, keep the eyes and the stimulus's direction readable. For a long tracking shot, draw the travel route and ending camera position before generating the first image.

```text
STILL PROMPT • replace every bracket
One [format] opening frame in [agreed medium/style]. [Character/reference IDs
and visible distinguishing details] at [screen position], [precise starting
pose, gaze and prop hand], a moment before [action]. Camera at [height and
angle], [framing and lens perspective]. Foreground [object], middle [subject],
background [landmark or target]. Leave [space] for [planned motion].
Light from [screen side/source], [time and palette]. Match [neighbor or
reference] on [specific shared details]. The still must show [critical evidence].
```

Build a timed storyboard or animatic using these stills over the actual song, including planned holds and temporary cuts. Watch once muted for story and geography, then with audio for lyric impact. Review the hardest location change, biggest camera move and most subtle performance at their real edit lengths. If the story fails in stills, repair the cue, coverage or handoff here. Save and deliver the approved board and animatic.

## 7. Turn each approved shot into a Kling prompt

Discover the current account's available tools, models, reference roles, length increments, ratio, output resolution, sound controls, download options and costs. If the available mode accepts only a first frame, establish the exact cast, outfit, set and blocking in the approved opening still. If separate subject, scene or end-frame inputs are supported together, bind each file to its intended role and record the mapping. Use an end frame for a precise landing when it represents a physically reachable pose and camera position. Keep the actual settings, model version and reference versions with the prompt so a pickup can use the same setup.

```text
KLING MOTION PROMPT • one shot
Open exactly on [first-frame file/role]. [Subject, starting stance and gaze].
On [visible trigger], [subject performs one specific action with direction,
effort, speed and prop contact]. [Partner or environment's physical response].
The camera starts [scale, height, position, perspective]. As [trigger], it
[single motivated path relative to subject, change of pace, focus target].
By [timing landmark], frame [precise end composition, pose, gaze, prop state].
Let [gesture or reaction] settle for the edit. Preserve [relevant identity,
wardrobe, geometry, screen direction, light]. [Specific constraint if needed.]
```

Convert musical triggers into observable cues and relative times when Kling receives only an image. “At about 4 s she sees the train doors close and stops” is actionable. “Match the beat perfectly” requires a usable audio reference and still needs editorial verification. Give the rendered clip a concrete beginning, middle and end. Direct micro-performance through weight, eyes, breath, grip and hesitation. Use motion in clothing, reflections or dust only when it responds to the action. Clean the final prompt of storyboard shorthand, Markdown emphasis, alternate camera options, other shots' instructions and transitions that belong in the edit.

Before submitting, **read the prompt while looking at the exact input frame**. Point to the subject, the action's starting position, and the space the camera or performer will enter. Read it once at performance speed. A closed fist cannot release a letter already lying on a table. A tight profile cannot reveal a person behind the camera with a focus pull. Repair the still, camera path or coverage wherever the instructions conflict. Keep the prompt's priority clear enough that a successful take can be described in one observable sentence.

### Worked sequence • an original lyric and a different visual world

**Direction chosen for this example only:** warm observational realism at a morning train platform. Nia has kept a letter from her sister Jo. Nia wants to give it to her before departure. Frame geography: platform pillars on the left, train on the right, morning light from screen left, Nia travels left to right, letter in Nia's right hand. The recurring red cuff identifies Jo. Illustrative timeline at 24 fps. The 6 s, 9 s and 14 s source lengths below are valid for the verified Kling 4.0 image-to-video entry and include one second at each end for editing. Recalculate them for the model used in production.

| Shot / song time / lyric cue | Opening still and action | Camera, cut and reason for length |
|---|---|---|
| 010 · 00:40–00:44 · “I kept the page folded” · edit 4 s / render 6 s | Chest-up three-quarter view. Nia holds the letter against her collarbone, thumb sealing the crease. Jo’s red cuff enters at frame right. Nia lifts her eyes. | Hold the frame so eyes and letter are both visible. Nia loosens her grip and turns toward the cuff. Cut on the first shift of her shoulder. Four seconds give us both the gesture and its cause. |
| 020 · 00:44–00:51 · “I ran before the whistle” · edit 7 s / render 9 s | Begin medium-wide on the same shoulder movement. Nia pushes off toward Jo at the train door, letter still in her right hand. | Track beside Nia. A pillar briefly hides Jo. When she reappears, Nia brakes and extends the letter. Cut while the extension is still in progress. Seven seconds carry the run, recognition, and stop. |
| 030 · 00:51–01:03 · “This time you get to read it” and held note · edit 12 s / render 14 s | Tight two-shot on the same side of the axis. Nia at left extends her right hand, Jo at right sees the letter and accepts it with her left. | Hold both hands during the exchange. As Jo looks up, ease back to include both faces. Keep Nia in frame to see her exhale under the held note. The silence between acceptance and eye contact earns the long take. |

**Ready-to-use motion prompt for 020**

> Begin waist-high on the supplied platform frame. Nia waits left of center, folded cream letter in her right hand. Give her a moment of stillness. At about one second her right shoulder dips as she pushes off toward screen right. Track alongside at her pace. A near pillar sweeps across the foreground and briefly hides Jo. As it clears, Jo's red cuff catches the morning light at the train door. Nia sees her and shortens her stride. Brake with Nia into a steady medium two-shot. By about six seconds Nia begins to extend the letter. Keep the reach readable through second eight, with daylight still visible between their hands. Let the reach settle during the final second. Finish with Nia on the left, Jo on the right and the letter still folded.

**How to cut it:** inspect the last usable moving frames of 020. Build 030's opening with the same extension phase, hand and travel direction, from a tighter angle on the established side. If 020 already shows the transfer, trim before contact or start 030 with Jo holding the letter and cut to her reaction. Check against the sung word on the real timeline. This choice fixes a visible double handoff even if both generated clips look good individually.

## 8. Produce in sequence and review in the edit

1. Estimate source seconds × current rate for each model and resolution. Include approved stills, alternate coverage and any pickup reserve. Keep source seconds separate from final runtime. If exact pricing is unavailable, record the uncertainty and the artist's approved limits.
2. Start with a small group of **real, budgeted production shots** containing a difficult handoff or performance. Cut the actual renders over the audio and inspect the result. These accepted shots belong to the final sequence. Resolve repeated issues in the reference still or prompt before spending on similar shots.
3. Queue independent shots within the actual service and account limits. Sequence-dependent shots wait for an accepted reference or end pose. Give each worker a unique shot/version assignment. Maintain a shared ledger with prompt, reference files, settings, generation ID, returned work index, attempt, status and cost when supplied. Record acceptance immediately and resume existing tasks by ID.
4. Watch each moving take at normal speed, then scrub the cut points. Check identity, hands, physical contact, direction, camera motivation, focus, flicker, geometry, and whether the performer actually makes the intended choice. A valid MP4 header proves only the file container. A still or thumbnail cannot demonstrate motion quality.
5. Cut each new take between its neighbors with the song. Ask “What changed? What made it happen? Where does my eye go next? Did I feel the lyric land?” Check action once across the cut, consistent eyelines, and adequate head/tail frames. Record accepted source in/out frames. If motion inspection is unavailable, mark the take *awaiting visual review* and supply a local preview for the editor.
6. Diagnose misses before requesting a pickup. A late gesture may be fixed by slipping the edit. An unexplained location change needs a bridge. A face drifting during an orbit may need a shorter arc, stronger reference, or a different angle. Wrong prop hand usually means repairing the still pair. Change the smallest thing that fixes the story and check the pair again. Keep prior takes versioned.
7. If a submission loses its task ID, preserve safe diagnostic information and check recoverable task history before spending again. If the first job cannot be identified, flag the possible duplicate charge and obtain the artist's decision. Refresh expired media links against the successful job. Download accepted assets promptly.

### Inspect continuity in the rendered footage

Compare the opening, the hardest moment of motion, and the selected exit frame against the approved character and location references. Scrub turns, foreground obstructions and prop contact frame by frame if anything changes unexpectedly. Play the outgoing clip directly into its neighbor at edit speed. Also compare the character or set's first appearance to its **later return**. Adjacent cuts alone can hide gradual drift. For a 12–15 second take, inspect each change in blocking or lighting along the way.

Record the take and timecode of any mismatch, the reference that shows the intended state, and the affected shot IDs. If a face changes after a turn, try trimming to an earlier usable cut or repairing the moving take with the approved profile. If a reverse angle invents a second doorway, rebuild that still against the set map and render the affected shot. If a transfer plays twice, adjust the source cut points. If an upstream take changes, revisit only the downstream shots that inherited its pose or scene state. Mark continuity accepted when the chosen frames play together and the intended people, place and action remain legible. Flag unresolved visual issues in the handoff.

### Watch a rough cut and decide what to change

Watch the whole working cut once with the song, full screen, with shot labels hidden and without pausing. Immediately write down the image you remember, the moment you felt the change, and the first place your attention dropped or geography became unclear. When an artist review is in scope, let them watch before explaining the concept. Ask what they thought happened at the turn and which image stayed with them. Compare their reading to the intent in the brief. Ambiguity the artist wants to preserve can be a successful result.

Return to the timecodes and edit the highest-impact issue first. If the payoff was clear but flat, try holding the reaction across the next phrase. If the listener missed the turn, try moving its visual setup earlier. If a new shot merely restates the lyric, remove it on a duplicate timeline and watch through the join. Compare both versions with the same audio. Log the chosen cut and a reason. Commission a new render when this edit exposes a missing image or performance that the existing material cannot supply.

For the agreed finishing pass, match neighboring shots in exposure, color balance, saturation and texture. Use the sequence's approved look frame and check skin or the principal subject through the cut. Preserve intentional changes in light. Keep camera originals available for the artist's final grade. Review titles or captions in the delivery crop where requested. Mute generated clip audio in the music edit unless a specific sound was chosen, and place approved sound effects on separate editable tracks.

## 9. Package everything for the editor

Produce and download the actual files into the agreed project folder. Keep one accepted, numbered still and one accepted, numbered watermark-free video per shot in their respective selects folders. Preserve intentional A/B shots as separate assets. Place alternate takes and reference frames outside the selects. Use a shared stem, for example `S02_030_Letter_Exchange`, across images, clips and records. Use the edit-order field to sort insertions or revisions.

**Check storage and avoid redundant copies.** Before a high-resolution generation/download batch, check free space and estimate the batch footprint including source images, conformed stills, contact sheets, clip exports and a safety margin. Keep one canonical copy of each source and each review/final asset; record the stable filename, path and checksum in the register. Before removing files to recover space, verify byte-identical duplicates by checksum and delete only the redundant copy while retaining the registered canonical asset. Preserve unique source, rejected and superseded creative versions unless the artist explicitly asks to remove them. If space becomes tight, pause new writes, identify the largest safe duplicate/cache, recover space, then verify file counts, dimensions and paths before resuming. Never let a partial or held image appear in the selects folder.

```text
Project/
  00_Brief/             agreed brief, treatment, decisions, delivery specs
  01_Audio_Lyrics/      original supplied master, lyrics, Tension_Map.csv,
                        Tension_Overview.png
  02_References/        artwork, cast masters, wardrobe/prop states, set views,
                        floor plans, style guide, reference IDs and versions
  03_Storyboard/        sequence cards, shot list, boards, timed animatic
  04_Stills/            numbered approved opening stills; end frames and keyframes
  05_Video_Selects/     separate numbered watermark-free source clips
  06_Edit/              edit map, transition notes, review cut with song when available,
                        editor interchange or final master if agreed
  07_Production/        continuity ledger and cut-frame references, exact
                        prompts/settings, generation and download records,
                        actual media specs, QC notes, README and delivery index
  Alternates/           superseded versions or optional coverage
```

**Maintain one shot record from storyboard to delivery.** Separate linked tables are fine if they share the same stable shot ID. Record:

- **Edit:** sequence, order, shot ID/version, cue IDs, lyric/event, timeline in/out, emotional change, render seconds, selected source in/out, handles, cut intent.
- **Direction:** opening state, actor action, camera position/path/endpoint, lighting and continuity locks, incoming/outgoing match, reference IDs, still prompt and motion prompt.
- **Production:** model/settings, reference roles, generation ID, work index, attempt and status, approved take, actual cost when known, review result and any pickup reason.
- **Files:** relative local paths for source stills, keyframes and downloaded clip, measured dimensions, duration, frame rate, codec, audio stream state, file size and watermark-free source confirmation. Stable IDs and local paths keep the delivery usable when provider links expire.

**Before handing over**, reconcile every planned shot against a local file. Use a media probe to read each clip's actual dimensions, aspect, frame rate, codec and duration. Decode media to catch truncation. Check that every selected frame range exists, all required clips came from the provider's watermark-free export, and any generated audio is handled as agreed. Inspect actual frames for unwanted marks or text. Play the sequence with the final recording, including the opening, every scene transition and the final frame. Verify measured edit runtime, sync, missing media, flash frames and audio continuity. Where a check cannot be performed, name the exact item pending.

**Conform the edit from measured frames.** Record the source stream's frame rate and frame count, and the timeline's rate. Set source and timeline in/out for each event, applying any rate conversion deliberately. For example, at 24 fps a four-second slot takes 96 frames. A 97-frame source starting at frame zero can fill that slot with the range [0, 96), leaving the final frame available. When the cut is ready, compare the actual timeline endpoint to the audio master and check the sync landmarks at the beginning, middle and end. If an editable project or interchange was requested, reopen it and relink from the delivered folder, then compare the reconstructed cut with the review export.

Deliver a clickable local folder, the numbered clip and still folders, the timed cue/shot map, the animatic or review cut, and the production index. If the artist is doing final editing, provide the source ranges and handoff notes that let them reconstruct the recommended sequence. Report planned shots, accepted shots and verified local downloads separately. The finished package should let a new editor answer three questions without reading the chat: **which file goes here, what should happen on this lyric, and exactly where can I cut to the next shot?**
