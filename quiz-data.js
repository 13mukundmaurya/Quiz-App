const quizzes = {
    'General Knowledge': {
        Easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Madrid"],
                correct: 1
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                correct: 1
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correct: 2
            }
        ],
        Medium: [
            {
                question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for Gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "In which year did the Titanic sink?",
                options: ["1912", "1920", "1905", "1898"],
                correct: 0
            },
            {
                question: "What is the speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
                correct: 0
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "France", "USA", "Australia"],
                correct: 1
            }
        ],
        Hard: [
            {
                question: "What is the only mammal capable of true powered flight?",
                options: ["Flying squirrel", "Flying fish", "Bat", "Flying dragon"],
                correct: 2
            },
            {
                question: "Which element has the highest melting point of all elements?",
                options: ["Iron", "Tungsten", "Titanium", "Platinum"],
                correct: 1
            },
            {
                question: "What is the Heisenberg Uncertainty Principle primarily about?",
                options: ["Speed and acceleration", "Position and momentum", "Energy and time", "Matter and energy"],
                correct: 1
            },
            {
                question: "Who wrote 'A Brief History of Time'?",
                options: ["Albert Einstein", "Stephen Hawking", "Richard Feynman", "Carl Sagan"],
                correct: 1
            },
            {
                question: "What is the largest moon of Jupiter?",
                options: ["Europa", "Ganymede", "Io", "Callisto"],
                correct: 1
            }
        ]
    },
    'Science': {
        Easy: [
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "O2", "H2SO4"],
                correct: 0
            },
            {
                question: "How many bones are in the human body?",
                options: ["186", "206", "226", "246"],
                correct: 1
            },
            {
                question: "What is the process by which plants make their own food?",
                options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
                correct: 2
            },
            {
                question: "Which animal is known for its ability to change color?",
                options: ["Chameleon", "Parrot", "Peacock", "Butterfly"],
                correct: 0
            },
            {
                question: "What is the basic unit of life?",
                options: ["Atom", "Molecule", "Cell", "Organism"],
                correct: 2
            }
        ],
        Medium: [
            {
                question: "What is the most abundant element in the Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Argon", "Carbon"],
                correct: 1
            },
            {
                question: "Which organ is responsible for filtering blood and producing urine?",
                options: ["Liver", "Kidney", "Pancreas", "Intestine"],
                correct: 1
            },
            {
                question: "What is the pH value of pure water at 25°C?",
                options: ["6", "7", "8", "9"],
                correct: 1
            },
            {
                question: "Which protein carries oxygen in the blood?",
                options: ["Hemoglobin", "Myoglobin", "Collagen", "Keratin"],
                correct: 0
            },
            {
                question: "What is the process of breaking down glucose for energy called?",
                options: ["Photosynthesis", "Glycolysis", "Osmosis", "Diffusion"],
                correct: 1
            }
        ],
        Hard: [
            {
                question: "What is the Avogadro's number?",
                options: ["6.02 x 10^22", "6.02 x 10^23", "6.02 x 10^24", "6.02 x 10^21"],
                correct: 1
            },
            {
                question: "Which type of bond is formed between two identical non-metal atoms?",
                options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                correct: 1
            },
            {
                question: "What is the name of the protein that catalyzes biochemical reactions?",
                options: ["Hormone", "Enzyme", "Antibody", "Neurotransmitter"],
                correct: 1
            },
            {
                question: "In quantum mechanics, what does 'h' represent?",
                options: ["Height", "Planck's constant", "Hydrogen", "Helium"],
                correct: 1
            },
            {
                question: "What is the primary cause of the Earth's seasons?",
                options: ["Distance from the sun", "Axial tilt", "Orbital speed", "Solar radiation"],
                correct: 1
            }
        ]
    },
    'History': {
        Easy: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correct: 1
            },
            {
                question: "Which empire built the Great Wall of China?",
                options: ["Japanese", "Chinese", "Mongolian", "Korean"],
                correct: 1
            },
            {
                question: "When did the Renaissance begin?",
                options: ["12th century", "13th century", "14th century", "15th century"],
                correct: 2
            },
            {
                question: "What ancient wonder is located in Egypt?",
                options: ["Colossus of Rhodes", "Great Pyramid of Giza", "Hanging Gardens", "Lighthouse of Alexandria"],
                correct: 1
            }
        ],
        Medium: [
            {
                question: "Who led the French Revolution?",
                options: ["Napoleon Bonaparte", "Robespierre", "Louis XVI", "Marie Antoinette"],
                correct: 0
            },
            {
                question: "In which country did the Renaissance first flourish?",
                options: ["France", "Italy", "Spain", "Germany"],
                correct: 1
            },
            {
                question: "What year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who invented the printing press?",
                options: ["Gutenberg", "Caxton", "Aldus", "De Spira"],
                correct: 0
            },
            {
                question: "Which treaty ended World War I?",
                options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Munich"],
                correct: 0
            }
        ],
        Hard: [
            {
                question: "Who was the first Holy Roman Emperor?",
                options: ["Otto I", "Charlemagne", "Frederick I", "Charles V"],
                correct: 1
            },
            {
                question: "In which year did the American Civil War begin?",
                options: ["1860", "1861", "1862", "1863"],
                correct: 1
            },
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "Alexander Hamilton"],
                correct: 1
            },
            {
                question: "What was the main cause of the French Revolution?",
                options: ["Military defeat", "Economic crisis", "Religious conflict", "Succession dispute"],
                correct: 1
            },
            {
                question: "Who was the last Tsar of Russia?",
                options: ["Nicholas I", "Alexander III", "Nicholas II", "Alexander II"],
                correct: 2
            }
        ]
    },
    'Technology': {
        Easy: [
            {
                question: "What does CPU stand for?",
                options: ["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Central Processor Utility"],
                correct: 0
            },
            {
                question: "Which company created the Android operating system?",
                options: ["Apple", "Microsoft", "Google", "Samsung"],
                correct: 2
            },
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correct: 0
            },
            {
                question: "In what year was the World Wide Web invented?",
                options: ["1989", "1990", "1991", "1992"],
                correct: 0
            },
            {
                question: "What does URL stand for?",
                options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Universal Retrieval Logic"],
                correct: 0
            }
        ],
        Medium: [
            {
                question: "What is the primary function of a GPU?",
                options: ["Process text", "Render graphics", "Store data", "Manage memory"],
                correct: 1
            },
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "What does API stand for?",
                options: ["Application Programming Interface", "Advanced Programming Instruction", "Applied Programming Implementation", "Application Process Integration"],
                correct: 0
            },
            {
                question: "What is the primary purpose of encryption?",
                options: ["Speed up data transfer", "Protect data security", "Reduce file size", "Improve display quality"],
                correct: 1
            },
            {
                question: "What does JSON stand for?",
                options: ["JavaScript Object Notation", "Java Standard Object Network", "JavaScript Online Network", "Java System Object Notation"],
                correct: 0
            }
        ],
        Hard: [
            {
                question: "What is the time complexity of a binary search algorithm?",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
                correct: 2
            },
            {
                question: "Which design pattern is used to ensure only one instance of a class exists?",
                options: ["Factory", "Observer", "Singleton", "Strategy"],
                correct: 2
            },
            {
                question: "What is the main difference between TCP and UDP?",
                options: ["Speed only", "Connection-oriented vs connectionless", "Protocol version", "Port number"],
                correct: 1
            },
            {
                question: "What does the term 'CI/CD' refer to?",
                options: ["Computer Integration/Code Development", "Continuous Integration/Continuous Deployment", "Code Improvement/Continuous Delivery", "Computer Infrastructure/Code Distribution"],
                correct: 1
            },
            {
                question: "In machine learning, what is overfitting?",
                options: ["Model memorizes training data", "Insufficient training", "Poor feature selection", "Incorrect labels"],
                correct: 0
            }
        ]
    },
    'Geography': {
        Easy: [
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
                correct: 1
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
                correct: 2
            },
            {
                question: "Which mountain is the tallest in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
                correct: 1
            }
        ],
        Medium: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Antarctic", "Kalahari", "Gobi"],
                correct: 1
            },
            {
                question: "What is the most populated country in the world?",
                options: ["India", "China", "USA", "Indonesia"],
                correct: 0
            },
            {
                question: "How many time zones does Earth have?",
                options: ["12", "24", "36", "48"],
                correct: 1
            },
            {
                question: "Which country has the most islands?",
                options: ["Norway", "Sweden", "Finland", "Indonesia"],
                correct: 3
            }
        ],
        Hard: [
            {
                question: "What is the capital of Paraguay?",
                options: ["Asunción", "Encarnación", "Ciudad del Este", "Villarrica"],
                correct: 0
            },
            {
                question: "Which of these countries does not border any other country?",
                options: ["Australia", "Iceland", "New Zealand", "Mauritius"],
                correct: 3
            },
            {
                question: "What is the deepest ocean trench?",
                options: ["Tonga Trench", "Philippine Trench", "Mariana Trench", "Kuril Trench"],
                correct: 2
            },
            {
                question: "How many countries are in the European Union?",
                options: ["25", "27", "30", "32"],
                correct: 1
            },
            {
                question: "What is the second-largest country by area?",
                options: ["Russia", "Canada", "USA", "China"],
                correct: 1
            }
        ]
    }
};
