document.addEventListener("DOMContentLoaded", function () {
  const maxQuestions = 35;


  const originalQuestions = [
{
question: "Which century was the early or first language period?",
options: ["430 - 450 AD", "450 - 430 AD", "410 - 430 AD", "460 - 480 AD"],
answer: "430 - 450 AD",
},
{
question: "____ is the act of putting down information on a writing material",
options: ["writing", "scribbling", "drawing", "sculpting"],
answer: "scribbling",
},
{
question: "____ is an act of writing down or jotting some points during a talk, lecture, or speech delivery",
options: ["note making", "note taking", "note recording", "note jotting"],
answer: "note taking",
},
{
question: "____ is an activity done during reading; involving the extraction of facts from readable materials such as textbooks, journals, encyclopedias, etc",
options: ["note making", "fact finding", "highlighting", "information extraction"],
answer: "note making",
},
{
question: "There are _____ types of essays",
options: ["2", "3", "4", "5"],
answer: "4",
},
{
question: "_____ is an imaginative composition that presents the writer's ideas on a particular subject",
options: ["narrative essay", "persuasive essay", "descriptive essay", "reflective essay"],
answer: "narrative essay",
},
{
question: "Stories can be told in the ___ and sometimes in the present tense",
options: ["past tense", "present tense", "future tense", "mixed tense"],
answer: "past tense",
},
{
question: "The 3Rs is ____, ____&_____",
options: ["read, recite, rewrite", "read, recollect, restructure", "research, review, reflect", "revise, reevaluate, rephrase"],
answer: "read, recollect, restructure",
},
{
question: "In narrative essay, storytelling, untrue events, and ____ are employed to achieve its goal",
options: ["realism", "exaggeration", "minimalism", "fabrication"],
answer: "exaggeration",
},
{
question: "_____ is an essay that involves giving an account about something",
options: ["argumentative essay", "expository essay", "narrative essay", "persuasive essay"],
answer: "narrative essay",
},
{
question: "____ is about argument, a debate, reasoning, an attempt to prove beyond reasonable doubt that a particular point or thing is this and not that, till the reader or listener is convinced",
options: ["argumentative essay", "persuasive essay", "expository essay", "logical essay"],
answer: "argumentative essay",
},
{
question: "The four parts of an argumentative essay are",
options: ["claims, counterclaims, reasons, and argument", "introduction, body, conclusion, thesis", "evidence, analysis, examples, conclusion", "propositions, rebuttals, premises, synthesis"],
answer: "claims, counterclaims, reasons, and argument",
},
{
question: "Those who are in support of the claim are",
options: ["proponents (pros)", "opponents (cons)", "dissenters", "advocates"],
answer: "proponents (pros)",
},
{
question: "____ is the opposite of argument, meaning those who are opposing the proposition",
options: ["counterargument", "counterclaim", "counterpoint", "refutation"],
answer: "counterclaim",
},
{
question: "____ is the main argument, i.e., the proposition",
options: ["A claim", "The thesis", "The statement", "The assertion"],
answer: "A claim",
},
{
question: "To begin an argument, start with the vocatives",
options: ["dear sir/madam,", "panel of judges,", "ladies and gentlemen,", "esteemed colleagues,"],
answer: "panel of judges, co-debaters, colleagues, ladies and gentlemen",
},
{
question: "In argumentative essay___ parties are involved",
options: ["3", "2", "4", "5"],
answer: "2",
},
{
question: "_____ is one that describes a situation, place, circumstances, condition, action, or state of being",
options: ["persuasive essay", "expository essay", "descriptive essay", "analytical essay"],
answer: "descriptive essay",
},
{
question: "There are two types of description namely",
options: ["objective and subjective description", "factual and fictional description", "realistic and idealistic description", "literal and metaphorical description"],
answer: "objective and subjective description",
},
{
question: "____ descriptive essay gives a vivid description of an issue or object",
options: ["emotional descriptive essay", "subjective descriptive essay", "objective descriptive essay", "visual descriptive essay"],
answer: "objective descriptive essay",
},
{
question: "____ descriptive essay is an emotional or sentimental essay which describes an issue or object based on personal point of view",
options: ["objective descriptive essay", "analytical descriptive essay", "subjective descriptive essay", "emotional descriptive essay"],
answer: "subjective descriptive essay",
},
{
question: "The features of descriptive essay include",
options: ["age, composition, condition, weight", "style, tone, voice, language", "setting, characters, plot, conflict", "atmosphere, perspective, symbolism, tone"],
answer: "age, composition, condition, weight",
},
{
question: "____ is the process of arranging things into specific propositions or relationships",
options: ["composition", "organization", "structure", "classification"],
answer: "composition",
},
{
question: "_____ is a type of essay that exposes a situation or explains an idea and shows how and why it is done",
options: ["analytical essay", "persuasive essay", "expository essay", "informative essay"],
answer: "expository essay",
},
{
question: "_____ is a formal writing that explains an issue, a theory, a process, a concept, or a plan",
options: ["analytical essay", "persuasive essay", "expository essay", "explanatory essay"],
answer: "expository essay",
},
{
question: "A good essay must be made up of these 3 major parts",
options: ["introduction, body, and conclusion", "thesis, antithesis, synthesis", "beginning, middle, and end", "plot, characters, resolution"],
answer: "introduction, main body, and conclusion",
},
{
question: "_____ is the preliminary statement which must embody the theme, and in summary, all the points you want to discuss in the essay",
options: ["introduction", "conclusion", "main body", "abstract"],
answer: "introduction",
},
{
question: "____ is a distinct or demarcated session of a piece of writing consisting of some sentences dealing with a single theme",
options: ["verse", "paragraph", "stanza", "chapter"],
answer: "paragraph",
},
{
question: "____ is the last paragraph of an essay which gives the final and general description, narration, argument, and exposition of an essay",
options: ["introduction", "body", "conclusion", "summary"],
answer: "conclusion",
},
{
question: "____ is a sentence that portrays the primary intention of a paragraph",
options: ["thesis statement", "concluding sentence", "topic sentence", "captivating sentence"],
answer: "topic sentence",
},
{
question: "_____ is the subject matter, the main point in any writing",
options: ["thesis", "theme", "plot", "subject"],
answer: "theme",
},
{
question: "_____ is a written information, message, request, account of events sent by one person to another",
options: ["text messaging", "letter writing", "emailing", "message transmission"],
answer: "letter writing",
},
{
question: "There are___ types of letter writing",
options: ["4", "3", "5", "6"],
answer: "5",
},
{
question: "The three types of letter writing are",
options: ["personal, business, and official", "formal, informal, and semi-formal", "friendly, professional, and casual", "traditional, modern, and contemporary"],
answer: "personal, business, and official",
},
{
question: "____ are mostly applications, business and other official letters",
options: ["informal letter", "personal letter", "casual letter", "formal letter"],
answer: "formal letter",
},
{
question: "In a formal letter, the main body ____",
options: ["elaborates with anecdotes", "provides background information", "asks rhetorical questions", "states the facts straight to the point"],
answer: "states the facts straight to the point",
},
{
question: "In a formal letter, the writer's address is on the____ side of the paper and the recipient's (addressee's) address is on the____ side of the paper",
options: ["left-hand, right-hand", "top, bottom", "right-hand, left-hand", "center, upper-center"],
answer: "top, bottom",
},
{
question: "The complementary close for a formal letter is",
options: ["Yours truly", "Sincerely", "Best regards", "Yours faithfully"],
answer: "Yours faithfully",
},
{
question: "____ is a friendly or intimate letter written to a friend or close relative.",
options: ["Personal letter", "Friendly letter", "Casual letter", "Intimate letter"],
answer: "Personal letter",
},
{
question: "In an informal letter, there is only____",
options: ["one paragraph", "one sentence", "one page", "one line"],
answer: "one paragraph",
},
{
question: "Informal letters permit the use of",
options: ["formal language only", "technical jargon", "acronyms and abbreviations", "slangs, colloquial expressions, pet names"],
answer: "slangs, colloquial expressions, pet names",
},
{
question: "There are ___ types of address",
options: ["3", "4", "5", "6"],
answer: "4",
},
{
question: "The two types of address are",
options: ["public address and private address", "direct address and indirect address", "open address and close address", "inside address and outside address"],
answer: "open address and close address",
},
{
question: "_____ has no punctuation except a period or full stop at the end of the last word of the address and within a recognized abbreviation such as PMB., P.O.BOX, etc",
options: ["The open address", "The closed address", "The direct address", "The indirect address"],
answer: "The open address",
},
{
question: "In close address there is____",
options: ["punctuation", "emphasis", "italicization", "capitalization"],
answer: "punctuation, a comma after the first line, a comma after the second line, a comma after the third line, and a full stop on the last line",
},
{
question: "There are ____ styles of an address",
options: ["2", "3", "4", "5"],
answer: "2",
},
{
question: "There two styles of an address are",
options: ["block style and indented or slant style", "script style and cursive style", "italic style and bold style", "capital style and lowercase style"],
answer: "block style and indented or slant style",
},
{
question: "_____ is usually written in a straight form",
options: ["cursive style", "block style", "italic style", "bold style"],
answer: "block style",
},
{
question: "____ as the name implies is slanting in arrangement",
options: ["cursive style", "block style", "italic style", "indented style"],
answer: "indented style",
},
{
question: "____ is the act of giving people information about something one has done, heard or witnessed",
options: ["report", "announcement", "broadcast", "declaration"],
answer: "report",
},
{
question: "A report may be ___ or ___",
options: ["spoken or written", "oral or verbal", "written or verbal", "expressed or conveyed"],
answer: "written or verbal",
},
{
question: "One of the qualities of a report is",
options: ["vagueness and ambiguity", "clarity and precision", "complexity and obscurity", "abstraction and confusion"],
answer: "clarity and precision",
},
{
question: "_____ is a scientific report on an experiment.",
options: ["research report", "laboratory report", "experimental report", "scientific report"],
answer: "laboratory report",
},
{
question: "____ is an official document used in sending information within an organization",
options: ["internal memorandum", "external memorandum", "inter-office mail", "inter-organizational message"],
answer: "internal memorandum",
},
{
question: "In internal memorandum, there is no _____",
options: ["salutations and complementary close", "main body", "date and address", "subject line"],
answer: "salutations and complementary close",
},
{
question: "____ is an evaluation of the entire text conducted from the cover to the last page of the book",
options: ["book analysis", "book critique", "book review", "book commentary"],
answer: "book review",
},
{
question: "____ is the process of arriving at dependable solutions to problems through planned and systematic collection, analysis, and interpretation of data.",
options: ["problem-solving", "decision-making", "research", "data analysis"],
answer: "research",
},
{
question: "If the first language was called broken, the subset of all the period of language is",
options: ["standardization", "modernization", "nativization", "anglicization"],
answer: "nativization",
},

{
question: "The origin of English came from.",
options: ["England & Scotland", "France & Germany", "Italy & Spain", "Greece & Rome"],
answer: "England & Scotland",
},
{
question: "____ is when you merge the three periods of the English language",
options: ["synthesis", "integration", "nativization", "assimilation"],
answer: "nativization",
},
{
question: "The acronym for NERDC",
options: ["National Education Research and Development Commission", "Nigerian Educational Resource and Development Center", "National Engineering Research and Development Council", "Nigeria Educational Resource and Development Commission"],
answer: "National Education Research and Development Commission",
},
{
question: "The history of the use of English in Nigeria can be traced to the first part of the",
options: ["19th century", "20th century", "15th century", "10th century"],
answer: "19th century",
},
{
question: "English-based pidgin is known to have been used as far back as",
options: ["16th century", "18th century", "20th century", "22nd century"],
answer: "16th century",
},
{
question: "The arrival of English was made possible through the arrival of",
options: ["Explorers and Traders", "Scientists and Scholars", "Artists and Musicians", "Colonizers and Missionaries"],
answer: "Colonizers and Missionaries",
},
{
question: "An undergraduate writes a project, the Master's degree postgraduate writes a dissertation, then a PhD student writes____",
options: ["thesis", "research paper", "manuscript", "report"],
answer: "thesis",
},
{
question: "The first meeting in an organization is called",
options: ["introductory meeting", "inaugural meeting", "inauguration meeting", "maiden meeting"],
answer: "maiden meeting",
},
{
question: "_____ are records of the activities or resolutions in a meeting of an association, organization, club, companies, or any establishment kept",
options: ["transcripts", "protocols", "reports", "minutes"],
answer: "minutes",
},
{
question: "A person who writes a minute is called",
options: ["scribe", "reporter", "secretary", "recorder"],
answer: "secretary",
},
{
question: "The title of the minutes includes",
options: ["the purpose of the meeting, venue, date, and time", "the agenda and attendees", "the resolutions and decisions", "the chairman's speech and contributions"],
answer: "the purpose of the meeting, venue, date, and time",
},
{
question: "_____ means wishing happiness, success, and good prospects to somebody or something",
options: ["greeting", "wishing", "toasting", "blessing"],
answer: "toasting",
},
{
question: "____ is a message of felicitation and Goodwill to a person, association, institution, or company",
options: ["greeting message", "appreciation message", "congratulatory message", "salutation message"],
answer: "congratulatory message",
},
{
question: "_____ is a short formal speech proposed to appreciate someone or an organization for a job well done",
options: ["appreciation speech", "commemorative speech", "vote of thanks", "congratulatory speech"],
answer: "vote of thanks",
},
{
question: "_____ may be defined as a brief account of events, situations, or an activity",
options: ["overview", "summary", "synopsis", "exposition"],
answer: "summary",
},
{
question: "The characteristics of language are",
options: ["arbitrary, creative patterning, structure dependence, and aesthetics", "logical, predictable, sequential, and linear", "systematic, inflexible, rigid, and uniform", "random, chaotic, unordered, and irregular"],
answer: "arbitrary, creative patterning, structure dependence, and aesthetics",
},
{
question: "English language came into Nigeria through three factors namely",
options: ["commercial, missionary, and colonial rule", "educational, political, and cultural exchange", "military, economic, and diplomatic relations", "technological, scientific, and industrial advancements"],
answer: "commercial, missionary, and colonial rule",
},
{
question: "An individual who speaks two languages is called",
options: ["multilingual", "bicultural", "bilingual", "monolingual"],
answer: "bilingual",
},
{
question: "_____ is the act of speaking two languages",
options: ["multilingualism", "biculturalism", "bilingualism", "monolingualism"],
answer: "bilingualism",
},
{
question: "There are ____ types of bilingual",
options: ["2", "3", "4", "5"],
answer: "4",
},
{
question: "The bilingual who acquires their language first before learning another language is called",
options: ["coordinate or independent bilingual", "compound bilingual", "subordinate bilingual", "incipient bilingual"],
answer: "coordinate or independent bilingual",
},
{
question: "A bilingual who acquires two languages at the same time is called",
options: ["coordinate or independent bilingual", "compound bilingual", "subordinate bilingual", "incipient bilingual"],
answer: "compound bilingual",
},
{
question: "A bilingual who acquires two languages but is more fluent in one than the other is called",
options: ["coordinate or independent bilingual", "compound bilingual", "subordinate bilingual", "incipient bilingual"],
answer: "subordinate bilingual",
},
{
question: "A bilingual who speaks one language fluently but merely understands the other is called",
options: ["coordinate or independent bilingual", "compound bilingual", "subordinate bilingual", "incipient bilingual"],
answer: "incipient bilingual",
},
{
question: "L1=",
options: ["native language", "first language", "primary language", "mother tongue"],
answer: "native language",
},
{
question: "____ is when English, which is an official language, is used as high variety (H) while Nigerian language is used as low variety (L).",
options: ["Dialectics", "Diglossia", "Bilingualism", "Monolingualism"],
answer: "Diglossia",
},
{
question: "_____ is a language that is adopted as the official language of a country",
options: ["Mother tongue", "Lingua Franca", "Dialect", "Pidgin"],
answer: "Lingua Franca",
},
{
question: "WAZOBIA stands for which ethnic groups in Nigeria",
options: ["Yoruba, Hausa, and Igbo", "Igbo, Efik, and Ibibio", "Yoruba, Edo, and Urhobo", "Hausa, Fulani, and Kanuri"],
answer: "Yoruba, Hausa, and Igbo",
},
{
question: "There are ____ languages in Nigeria",
options: ["450", "513", "600", "750"],
answer: "513",
},
{
question: "Nigeria is a ____ country",
options: ["bilingual", "monolingual", "multilingual", "unilingual"],
answer: "multilingual",
},
{
question: "L2=",
options: ["second language", "foreign language", "international language", "official language"],
answer: "foreign language",
},
{
question: "The are ____ period of English language",
options: ["2", "3", "4", "5"],
answer: "3",
},
{
question: "Acronym of NINLAN",
options: ["National Institute of Nigerian Language", "Nigerian Institute of Native Languages", "National Institution for Nigerian Languages", "Nigeria Institute for Language Studies"],
answer: "National Institute of Nigerian Language",
},
{
question: "The oldest form of language is",
options: ["Old English", "Proto-Indo-European", "Minimal Pidgin", "Ancient Greek"],
answer: "Minimal Pidgin",
},
{
question: "The first page of a book view is for",
options: ["cover page", "title page", "acknowledgment", "preface"],
answer: "cover page",
},
{
question: "The second page of a book review is.",
options: ["review structure/modality", "table of contents", "introduction", "author's biography"],
answer: "review structure/modality",
},
{
question: "APA documentation style is adopted by",
options: ["literature and arts", "natural sciences", "social sciences", "philosophy and ethics"],
answer: "social sciences",
},
{
question: "The various methods for data collection in research are",
options: ["use of questionnaire, tests, laboratory experiment, interview, and observation", "survey, analysis, experimentation, interview, and observation", "field study, case study, laboratory research, questionnaire, and testing", "interview, survey, analysis, observation, and experimentation"],
answer: "use of questionnaire, tests, laboratory experiment, interview, and observation",
},
{
question: "_____ refers to preliminary statements or issues that are basic to the major purpose of the study",
options: ["research problem", "literature review", "methodology", "statement of the problem"],
answer: "statement of the problem",
},
{
question: "____ is the process that involves the procedure or the method of generating data for the study.",
options: ["data analysis", "data synthesis", "data collection", "data presentation"],
answer: "data collection",
},
{
question: "____ means a research project which is mandatory for every student in their final year to select topics and develop the topic for presentation using the parameters of a research writing",
options: ["advanced project", "final year project", "research thesis", "thesis project"],
answer: "final year project",
},
];



  // Randomize questions
  const shuffledQuestions = originalQuestions.sort(() => Math.random() - 0.5);
  const questions = shuffledQuestions.slice(0, maxQuestions);
  

  let currentQuestionIndex = 0;
  let score = 0;
  let failedQuestions = [];

  const quizContainer = document.getElementById("quiz-container");
  const scoreElement = document.getElementById("score");
  const failedQuestionsElement = document.getElementById("failed-questions");
  const passMessageElement = document.getElementById("pass-message");

  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
  
    const questionNumberElement = document.getElementById("questionNumber");
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
    questionNumberElement.style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("failed-questions").style.display = "none";
    document.getElementById("pass-message").style.display = "none";
  
    document.getElementById("question").textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.textContent = option;
      optionElement.classList.add("option");
      optionElement.addEventListener("click", () => checkAnswer(optionElement, option));
      optionsContainer.appendChild(optionElement);
    });
  }



  function checkAnswer(selectedOptionElement, selectedOption) {
      const currentQuestion = questions[currentQuestionIndex];

      const options = document.querySelectorAll(".option");
      options.forEach((option) => {
        option.style.pointerEvents = "none"; // Disable further clicks after an answer is selected
      });

      // Highlight correct and incorrect answers
      currentQuestion.options.forEach((option, index) => {
        const optionElement = options[index];
        if (option === currentQuestion.answer) {
          optionElement.classList.add("correct");
        } else if (option === selectedOption) {
          optionElement.classList.add("incorrect");
        }
      });

      if (selectedOption === currentQuestion.answer) {
        score++;
      } else {
        failedQuestions.push(currentQuestionIndex);
      }

      // Check if it's the last question
      if (currentQuestionIndex === questions.length - 1) {
        showScore();
      } else {
        currentQuestionIndex++;
        setTimeout(showQuestion, 1000);
      }
    }
















  function showScore() {
    document.getElementById("questionNumber").remove();
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    // Remove the last question element from the DOM
    const questionElement = document.getElementById("question");
    questionElement.parentNode.removeChild(questionElement);
    

    if (score >= Math.ceil(questions.length / 2)) {
      document.getElementById("pass-message").textContent = "Congratulations! You passed the test!";
      document.getElementById("pass-message").style.display = "block";
    } else {
      document.getElementById("failed-questions").textContent = "Sorry, you did not pass the test. Better luck next time!";
      document.getElementById("failed-questions").style.display = "block";
    }

    const adjustedScore = score / maxQuestions; // Double the final score
    document.getElementById("score").textContent = `Your Score: ${adjustedScore * 70}/${70}`;
    document.getElementById("score").style.display = "block";
  }

  showQuestion();
});