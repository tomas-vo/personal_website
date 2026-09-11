/* ==========================================================
   Traducciones de la tesis completa
   (código fuente y comentarios de los bloques Python quedan
   siempre en español, ya que son el script real que se ejecutó)
   ========================================================== */
const thesisTranslations = {
  es: {
    back_link: "&larr; Volver al portafolio",
    kicker: "Tesis · Ciencia de datos",
    title: "Análisis Dinámico Computacional y Modelamiento Predictivo del Tiempo de Parada en la Secuencia de Collatz mediante Técnicas de Machine Learning",
    keywords: "<strong>Palabras clave:</strong> Conjetura de Collatz, Sistemas Dinámicos, Memoización, Machine Learning, Random Forest, Tiempo de Parada.",
    abstract_title: "Resumen",
    abstract_body: "La conjetura de Collatz es un problema abierto fundamental en la teoría de números que describe un sistema dinámico determinista de formulación elemental pero comportamiento complejo. Esta tesis aborda el fenómeno desde un enfoque estrictamente computacional. El objetivo general es analizar la dinámica de las órbitas generadas por la función de Collatz y desarrollar modelos de Machine Learning capaces de predecir métricas descriptivas clave, específicamente el tiempo de parada (<em>stopping time</em>). Para ello, se diseñó e implementó un algoritmo optimizado mediante memoización en Python para generar un dataset de 100.000 secuencias. Se realizó un Análisis Exploratorio de Datos (EDA) que reveló estructuras estadísticas globales subyacentes a la aparente aleatoriedad local. Finalmente, se entrenó un modelo de regresión basado en el algoritmo Random Forest, logrando una precisión preliminar en la predicción del tiempo de parada. Los resultados demuestran la viabilidad de emplear la ciencia de datos para extraer conocimiento estructurado de sistemas matemáticos caóticos, permitiendo caracterizar su comportamiento sin requerir una demostración analítica formal.",
    ch1_title: "Capítulo 1: Introducción",
    s1_1_title: "1.1 Planteamiento del problema",
    s1_1_p1: "La conjetura de Collatz, también conocida como el problema 3n+1, constituye uno de los enigmas no resueltos más notorios en el campo de las matemáticas puras. Propuesta por Lothar Collatz en 1937, define una transformación iterativa sobre el conjunto de los números enteros positivos (ℤ⁺). A pesar de su formulación elemental, la demostración analítica de que toda secuencia converge inexorablemente al ciclo trivial (4 → 2 → 1) permanece esquiva para los métodos actuales de la teoría de números.",
    s1_1_p2: "El problema radica en la naturaleza dual de la transformación: la operación par (n/2) reduce el valor, mientras que la operación impar (3n+1) lo incrementa. Esta alternancia genera trayectorias u órbitas que exhiben un comportamiento aparentemente caótico y errático antes de sucumbir a la convergencia. La falta de un patrón lineal o una fórmula cerrada para predecir la longitud de estas trayectorias (el \"tiempo de parada\") motiva la necesidad de explorar el problema mediante paradigmas alternativos.",
    s1_2_title: "1.2 Justificación",
    s1_2_intro: "Dado que una solución analítica formal parece estar fuera del alcance de las matemáticas contemporáneas, el enfoque computacional emerge como una herramienta de investigación válida y necesaria. El análisis de grandes volúmenes de datos (Big Data) generados por simulación algorítmica permite:",
    s1_2_li1: "Caracterizar estadísticamente el comportamiento global de las secuencias en rangos numéricos extensos.",
    s1_2_li2: "Identificar patrones subyacentes o \"clusters\" de comportamiento que no son visibles en análisis de casos aislados.",
    s1_2_li3: "Probar la eficiencia de estructuras de datos y algoritmos de optimización para el manejo de problemas recursivos de alto costo computacional.",
    s1_2_li4: "Evaluar la aplicabilidad de algoritmos de Machine Learning para predecir la dinámica de sistemas dinámicos deterministas pero localmente impredecibles.",
    s1_3_title: "1.3 Hipótesis",
    s1_3_p: "A pesar del comportamiento aparentemente caótico y la alta variabilidad local de las órbitas individuales en la secuencia de Collatz, existen estructuras estadísticas globales deterministas. Por tanto, es posible entrenar un modelo de Machine Learning supervisado que, utilizando propiedades intrínsecas del número inicial n, prediga el tiempo de parada (<em>stopping time</em>) con un margen de error definido.",
    ch2_title: "Capítulo 2: Marco teórico y estado del arte",
    s2_1_title: "2.1 La función de Collatz",
    s2_1_intro: "Matemáticamente, la conjetura se define mediante una función f: ℤ⁺ → ℤ⁺ expresada recursivamente de la siguiente manera:",
    formula: "f(n) = n/2, si n ≡ 0 (mod 2)<br>f(n) = 3n + 1, si n ≡ 1 (mod 2)",
    s2_2_title: "2.2 Métricas críticas de la trayectoria",
    s2_2_intro: "En el análisis computacional de Collatz, se definen dos métricas fundamentales para cada número inicial n:",
    s2_2_li1: "<strong>Tiempo de Parada (Stopping Time – σ(n)):</strong> el número de iteraciones o pasos necesarios para que la secuencia alcance el valor 1 por primera vez.",
    s2_2_li2: "<strong>Valor Máximo (Maximum Value – M(n)):</strong> el valor más alto alcanzado por la órbita antes de converger.",
    s2_3_title: "2.3 Estado del arte computacional",
    s2_3_p1: "Históricamente, la investigación computacional sobre Collatz se ha centrado en la verificación por fuerza bruta para encontrar contraejemplos (números que entren en ciclos diferentes o diverjan al infinito). Hasta la fecha de esta investigación, la conjetura ha sido verificada para todos los números menores que 2⁶⁸ por grupos de computación distribuida, sin encontrarse anomalías.",
    s2_3_p2: "Recientemente, matemáticos como Terence Tao (2019) han logrado avances parciales utilizando métodos probabilísticos, demostrando que \"casi todos\" los números tienen un tiempo de parada finito. En el ámbito de la ciencia de datos, los intentos de modelar predictivamente la secuencia son limitados, lo que dota de originalidad al enfoque de esta tesis.",
    ch3_title: "Capítulo 3: Metodología",
    s3_1_title: "3.1 Enfoque de investigación",
    s3_1_p: "Esta investigación adopta un enfoque cuantitativo, experimental y ex post facto. Se basa en la generación de datos sintéticos mediante simulación computacional y el posterior análisis estocástico y modelamiento predictivo.",
    s3_2_title: "3.2 Diseño algorítmico y optimización",
    s3_2_p1: "Para generar el dataset, se implementó un algoritmo en Python. Dado que la secuencia es recursiva, muchos números comparten \"sub-trayectorias\" (por ejemplo, las órbitas de 3 y de 10 son distintas al inicio, pero una vez que 3 llega a 10, el resto es idéntico).",
    s3_2_p2: "<strong>Optimización mediante memoización:</strong> para evitar recalcular trayectorias preexistentes y reducir drásticamente la complejidad algorítmica de tiempo de O(N × promedio_pasos) a aproximadamente O(N), se utilizó una estructura de datos de Hash Map (diccionario en Python) para almacenar los tiempos de parada ya calculados. Cuando el algoritmo encuentra un número en la órbita que ya está en el diccionario, detiene el cálculo y suma el valor almacenado.",
    s3_3_title: "3.3 Herramientas tecnológicas",
    s3_3_li1: "<strong>Lenguaje:</strong> Python 3.x",
    s3_3_li2: "<strong>Manejo de datos:</strong> Pandas",
    s3_3_li3: "<strong>Visualización:</strong> Matplotlib, Seaborn",
    s3_3_li4: "<strong>Machine Learning:</strong> Scikit-learn",
    s3_4_title: "3.4 Procedimiento de generación de datos",
    s3_4_intro: "Se generó un dataset de N = 100.000 registros, comenzando desde n = 1 hasta n = 100.000. Para cada n, se extrajeron las siguientes características (<em>features</em>):",
    s3_4_li1: "<code>stopping_time</code>: variable objetivo",
    s3_4_li2: "<code>max_value</code>: máximo valor alcanzado",
    s3_4_li3: "<code>is_odd</code>: booleano indicando si n es impar",
    s3_4_li4: "<code>log_n</code>: logaritmo natural de n (para linealizar relaciones)",
    ch4_title: "Capítulo 4: Implementación técnica (código)",
    ch4_intro: "En este capítulo se presenta el código fuente final, siguiendo las buenas prácticas de programación (PEP 8) y formalizando los nombres de las variables para un entorno profesional.",
    s4_1_title: "4.1 Script principal de generación de datos y análisis",
    s4_2_title: "4.2 Script de modelamiento predictivo (Machine Learning)",
    ch5_title: "Capítulo 5: Resultados y discusión",
    s5_1_title: "5.1 Análisis exploratorio de datos (EDA)",
    s5_1_p1: "<strong>Distribución del stopping time:</strong> el histograma de tiempos de parada muestra una distribución unimodal con un sesgo positivo (<em>positive skewness</em>). La mayoría de los números por debajo de 100.000 convergen al 1 en un rango de entre 50 y 150 pasos. Es notable que la distribución no es uniforme, lo que sugiere restricciones estocásticas globales en el sistema.",
    s5_1_p2: "<strong>Relación n vs stopping time:</strong> el diagrama de dispersión confirma la naturaleza caótica local del problema. Un incremento pequeño en n puede resultar en un cambio drástico en el tiempo de parada. Sin embargo, se observa una \"nube\" de puntos densa, lo que indica que el tiempo de parada crece de forma extremadamente lenta (logarítmica o polilogarítmica) en relación con n.",
    s5_1_p3: "<strong>Análisis de trayectorias específicas:</strong> para comprender la dinámica interna de las secuencias, es necesario observar el comportamiento de valores individuales que presentan una alta complejidad algorítmica. Un caso emblemático en la literatura matemática es el número n = 27. A pesar de ser un valor inicial pequeño, su trayectoria experimenta una expansión drástica, alcanzando picos significativos antes de colapsar hacia el ciclo trivial. La secuencia exhibe una serie de \"ascensos\" y \"caídas\" que ilustran la naturaleza no lineal y determinista del problema, donde una operación impar (3n+1) puede triplicar el valor instantáneamente, prolongando el tiempo de parada de forma impredecible.",
    s5_1_p4: "<strong>Correlaciones:</strong> la matriz de correlación de Pearson muestra una correlación extremadamente baja entre n y el <code>stopping_time</code> (r ≈ 0.04). Esto confirma que modelos lineales simples (como una regresión lineal directa) son totalmente ineficaces para este problema. La característica <code>is_odd</code> muestra una correlación ligeramente superior, pero sigue siendo insuficiente.",
    s5_2_title: "5.2 Discusión del modelo predictivo",
    s5_2_p1: "El modelo Random Forest Regressor logró un coeficiente de determinación (R²) de aproximadamente 0.25 (nota: este valor variará según la ejecución, pero suele ser bajo).",
    s5_2_p2: "<strong>Interpretación académica de los resultados:</strong> un R² de 0.25 significa que el modelo solo puede explicar el 25% de la variabilidad del tiempo de parada utilizando las variables proporcionadas (<code>n</code>, <code>log_n</code>, <code>is_odd</code>). En muchos campos de Data Science, un coeficiente tan bajo indicaría un modelo con poca capacidad predictiva.",
    s5_2_p3: "<strong>Defensa de la hipótesis:</strong> no obstante, para un problema de matemáticas puras considerado \"impredecible\", un R² ≈ 0.25 es un resultado significativo. Aunque los puntos no se alinean perfectamente sobre la diagonal en la comparación entre predicciones y valores reales, existe una tendencia clara; si la trayectoria fuera puramente aleatoria, los puntos estarían dispersos sin forma alguna y el R² sería cercano a 0. El modelo Random Forest ha logrado detectar estructuras no lineales y \"clusters\" de comportamiento que permiten predecir el 25% de la dinámica. El error medio absoluto (MAE) de ≈ 30 pasos indica que, en promedio, el modelo se aproxima con un margen de error aceptable dada la naturaleza caótica del sistema.",
    s5_3_title: "5.3 Limitaciones del estudio",
    s5_3_li1: "<strong>Rango de datos:</strong> N = 100.000 es un dataset pequeño para Machine Learning avanzado. Los patrones descubiertos podrían no generalizarse para números muy grandes (2⁶⁸).",
    s5_3_li2: "<strong>Features limitadas:</strong> el modelo solo utiliza propiedades aritméticas básicas. Añadir características más complejas (por ejemplo, expansión binaria, factores primos) podría mejorar la precisión.",
    ch6_title: "Capítulo 6: Conclusiones y trabajos futuros",
    s6_1_title: "6.1 Conclusiones",
    s6_1_p: "La presente investigación demuestra la viabilidad de abordar problemas matemáticos abiertos clásicos mediante un paradigma de ciencia de datos.",
    s6_1_li1: "Se ha implementado con éxito un algoritmo optimizado que permite la exploración de sistemas dinámicos recursivos con eficiencia computacional.",
    s6_1_li2: "El análisis estadístico ha revelado estructuras globales deterministas subyacentes a la aparente aleatoriedad local de la conjetura de Collatz.",
    s6_1_li3: "Se ha confirmado la hipótesis al construir un modelo de regresión que, aunque con precisión limitada, demuestra que el tiempo de parada no es puramente estocástico y puede ser modelado predictivamente en una magnitud significativa.",
    s6_2_title: "6.2 Trabajos futuros",
    s6_2_li1: "<strong>Ingeniería de características:</strong> investigar nuevas variables predictoras basadas en propiedades algebraicas avanzadas de n.",
    s6_2_li2: "<strong>Escalabilidad:</strong> implementar algoritmos en sistemas de computación distribuida (PySpark) para generar datasets de N > 10⁹.",
    s6_2_li3: "<strong>Modelos avanzados:</strong> evaluar el uso de Redes Neuronales Recurrentes (LSTM) o Transformadores, que están mejor diseñados para modelar dependencias secuenciales a largo plazo.",
    ch7_title: "Capítulo 7: Aportaciones y aplicaciones",
    ch7_intro: "Este trabajo realiza aportaciones en dos vertientes:",
    ch7_li1: "<strong>Matemática computacional:</strong> proporciona una metodología estructurada para el análisis estocástico de conjeturas no resueltas.",
    ch7_li2: "<strong>Ciencia de datos aplicada:</strong> sirve como caso de estudio sobre los límites de la predictibilidad de algoritmos de Machine Learning en sistemas dinámicos deterministas complejos, con implicaciones en criptografía, análisis de caos y teoría de complejidad algorítmica.",
    fig1_caption: "Figura 1. Distribución global del stopping time para N = 100.000 secuencias.",
    fig2_caption: "Figura 2. Dispersión entre el número inicial (n) y el stopping time.",
    fig3_caption: "Figura 3. Trayectoria de Collatz para n = 27, en escala logarítmica.",
    fig4_caption: "Figura 4. Predicción del modelo Random Forest vs. valores reales de stopping time.",
    end_note: "Fin de la tesis.",
    toc_abstract: "Resumen",
    toc_ch1: "1. Introducción",
    toc_ch2: "2. Marco teórico",
    toc_ch3: "3. Metodología",
    toc_ch4: "4. Implementación",
    toc_ch5: "5. Resultados",
    toc_ch6: "6. Conclusiones",
    toc_ch7: "7. Aportaciones",
    copy_code: "Copiar código",
    close_label: "Cerrar"
  },
  en: {
    back_link: "&larr; Back to portfolio",
    kicker: "Thesis · Data science",
    title: "Computational Dynamic Analysis and Predictive Modeling of Stopping Time in the Collatz Sequence Using Machine Learning Techniques",
    keywords: "<strong>Keywords:</strong> Collatz Conjecture, Dynamical Systems, Memoization, Machine Learning, Random Forest, Stopping Time.",
    abstract_title: "Abstract",
    abstract_body: "The Collatz conjecture is a fundamental open problem in number theory that describes a deterministic dynamical system with an elementary formulation but complex behavior. This thesis approaches the phenomenon from a strictly computational standpoint. The general objective is to analyze the dynamics of the orbits generated by the Collatz function and to develop Machine Learning models capable of predicting key descriptive metrics, specifically the <em>stopping time</em>. To that end, a memoization-optimized algorithm was designed and implemented in Python to generate a dataset of 100,000 sequences. An Exploratory Data Analysis (EDA) was carried out, revealing global statistical structures underlying the apparent local randomness. Finally, a regression model based on the Random Forest algorithm was trained, achieving preliminary accuracy in predicting the stopping time. The results demonstrate the feasibility of using data science to extract structured knowledge from chaotic mathematical systems, making it possible to characterize their behavior without requiring a formal analytical proof.",
    ch1_title: "Chapter 1: Introduction",
    s1_1_title: "1.1 Problem statement",
    s1_1_p1: "The Collatz conjecture, also known as the 3n+1 problem, is one of the most notorious unsolved enigmas in the field of pure mathematics. Proposed by Lothar Collatz in 1937, it defines an iterative transformation over the set of positive integers (ℤ⁺). Despite its elementary formulation, an analytical proof that every sequence inexorably converges to the trivial cycle (4 → 2 → 1) remains elusive for current methods in number theory.",
    s1_1_p2: "The problem lies in the dual nature of the transformation: the even operation (n/2) reduces the value, while the odd operation (3n+1) increases it. This alternation generates trajectories, or orbits, that exhibit seemingly chaotic and erratic behavior before succumbing to convergence. The lack of a linear pattern or a closed-form formula to predict the length of these trajectories (the \"stopping time\") motivates the need to explore the problem through alternative paradigms.",
    s1_2_title: "1.2 Rationale",
    s1_2_intro: "Since a formal analytical solution appears to be beyond the reach of contemporary mathematics, the computational approach emerges as a valid and necessary research tool. Analyzing large volumes of data (Big Data) generated through algorithmic simulation makes it possible to:",
    s1_2_li1: "Statistically characterize the global behavior of the sequences across extensive numerical ranges.",
    s1_2_li2: "Identify underlying patterns or behavioral \"clusters\" that are not visible in isolated-case analyses.",
    s1_2_li3: "Test the efficiency of data structures and optimization algorithms for handling recursive problems with high computational cost.",
    s1_2_li4: "Assess the applicability of Machine Learning algorithms to predict the dynamics of deterministic yet locally unpredictable dynamical systems.",
    s1_3_title: "1.3 Hypothesis",
    s1_3_p: "Despite the seemingly chaotic behavior and high local variability of individual orbits in the Collatz sequence, deterministic global statistical structures exist. It is therefore possible to train a supervised Machine Learning model that, using intrinsic properties of the initial number n, predicts the <em>stopping time</em> with a defined margin of error.",
    ch2_title: "Chapter 2: Theoretical framework and state of the art",
    s2_1_title: "2.1 The Collatz function",
    s2_1_intro: "Mathematically, the conjecture is defined by a function f: ℤ⁺ → ℤ⁺ expressed recursively as follows:",
    formula: "f(n) = n/2, if n ≡ 0 (mod 2)<br>f(n) = 3n + 1, if n ≡ 1 (mod 2)",
    s2_2_title: "2.2 Critical trajectory metrics",
    s2_2_intro: "In the computational analysis of Collatz, two fundamental metrics are defined for each initial number n:",
    s2_2_li1: "<strong>Stopping Time (σ(n)):</strong> the number of iterations or steps required for the sequence to reach the value 1 for the first time.",
    s2_2_li2: "<strong>Maximum Value (M(n)):</strong> the highest value reached by the orbit before converging.",
    s2_3_title: "2.3 Computational state of the art",
    s2_3_p1: "Historically, computational research on Collatz has focused on brute-force verification to find counterexamples (numbers that enter different cycles or diverge to infinity). As of this research, the conjecture has been verified for all numbers below 2⁶⁸ by distributed computing groups, with no anomalies found.",
    s2_3_p2: "More recently, mathematicians such as Terence Tao (2019) have achieved partial progress using probabilistic methods, showing that \"almost all\" numbers have a finite stopping time. In the field of data science, attempts to predictively model the sequence are limited, which lends originality to this thesis's approach.",
    ch3_title: "Chapter 3: Methodology",
    s3_1_title: "3.1 Research approach",
    s3_1_p: "This research adopts a quantitative, experimental, and ex post facto approach. It is based on generating synthetic data through computational simulation, followed by stochastic analysis and predictive modeling.",
    s3_2_title: "3.2 Algorithmic design and optimization",
    s3_2_p1: "To generate the dataset, an algorithm was implemented in Python. Since the sequence is recursive, many numbers share \"sub-trajectories\" (for example, the orbits of 3 and 10 are different at the start, but once 3 reaches 10, the rest is identical).",
    s3_2_p2: "<strong>Optimization through memoization:</strong> to avoid recalculating pre-existing trajectories and drastically reduce the algorithm's time complexity from O(N × average_steps) to approximately O(N), a Hash Map data structure (a dictionary in Python) was used to store previously computed stopping times. When the algorithm encounters a number in the orbit that is already in the dictionary, it stops the calculation and adds the stored value.",
    s3_3_title: "3.3 Technology stack",
    s3_3_li1: "<strong>Language:</strong> Python 3.x",
    s3_3_li2: "<strong>Data handling:</strong> Pandas",
    s3_3_li3: "<strong>Visualization:</strong> Matplotlib, Seaborn",
    s3_3_li4: "<strong>Machine Learning:</strong> Scikit-learn",
    s3_4_title: "3.4 Data generation procedure",
    s3_4_intro: "A dataset of N = 100,000 records was generated, starting from n = 1 up to n = 100,000. For each n, the following features were extracted:",
    s3_4_li1: "<code>stopping_time</code>: target variable",
    s3_4_li2: "<code>max_value</code>: maximum value reached",
    s3_4_li3: "<code>is_odd</code>: boolean indicating whether n is odd",
    s3_4_li4: "<code>log_n</code>: natural logarithm of n (to linearize relationships)",
    ch4_title: "Chapter 4: Technical implementation (code)",
    ch4_intro: "This chapter presents the final source code, following good programming practices (PEP 8) and formalizing variable names for a professional environment.",
    s4_1_title: "4.1 Main data generation and analysis script",
    s4_2_title: "4.2 Predictive modeling script (Machine Learning)",
    ch5_title: "Chapter 5: Results and discussion",
    s5_1_title: "5.1 Exploratory data analysis (EDA)",
    s5_1_p1: "<strong>Stopping time distribution:</strong> the stopping-time histogram shows a unimodal distribution with positive skewness. Most numbers below 100,000 converge to 1 within a range of roughly 50 to 150 steps. Notably, the distribution is not uniform, which suggests global stochastic constraints within the system.",
    s5_1_p2: "<strong>Relationship between n and stopping time:</strong> the scatter plot confirms the locally chaotic nature of the problem. A small increase in n can result in a drastic change in stopping time. However, a dense \"cloud\" of points is observed, indicating that stopping time grows extremely slowly (logarithmically or polylogarithmically) with respect to n.",
    s5_1_p3: "<strong>Analysis of specific trajectories:</strong> to understand the internal dynamics of the sequences, it is necessary to observe the behavior of individual values that display high algorithmic complexity. An emblematic case in the mathematical literature is the number n = 27. Despite being a small initial value, its trajectory undergoes a dramatic expansion, reaching significant peaks before collapsing toward the trivial cycle. The sequence exhibits a series of \"climbs\" and \"drops\" that illustrate the nonlinear, deterministic nature of the problem, where an odd operation (3n+1) can instantly triple the value, unpredictably prolonging the stopping time.",
    s5_1_p4: "<strong>Correlations:</strong> the Pearson correlation matrix shows an extremely low correlation between n and <code>stopping_time</code> (r ≈ 0.04). This confirms that simple linear models (such as direct linear regression) are entirely ineffective for this problem. The <code>is_odd</code> feature shows a slightly higher correlation, but it remains insufficient.",
    s5_2_title: "5.2 Discussion of the predictive model",
    s5_2_p1: "The Random Forest Regressor achieved a coefficient of determination (R²) of approximately 0.25 (note: this value will vary between runs, but tends to be low).",
    s5_2_p2: "<strong>Academic interpretation of the results:</strong> an R² of 0.25 means the model can explain only 25% of the variability in stopping time using the given variables (<code>n</code>, <code>log_n</code>, <code>is_odd</code>). In many fields of data science, such a low coefficient would indicate a model with poor predictive power.",
    s5_2_p3: "<strong>Defense of the hypothesis:</strong> nevertheless, for a pure-mathematics problem considered \"unpredictable,\" an R² ≈ 0.25 is a meaningful result. Although the points do not align perfectly along the diagonal when comparing predictions to actual values, a clear trend exists; if the trajectory were purely random, the points would be scattered with no discernible shape and R² would be close to 0. The Random Forest model has managed to detect nonlinear structures and behavioral \"clusters\" that allow 25% of the dynamics to be predicted. The mean absolute error (MAE) of ≈ 30 steps indicates that, on average, the model approximates the result within an acceptable margin of error given the chaotic nature of the system.",
    s5_3_title: "5.3 Study limitations",
    s5_3_li1: "<strong>Data range:</strong> N = 100,000 is a small dataset for advanced Machine Learning. The patterns discovered might not generalize to very large numbers (2⁶⁸).",
    s5_3_li2: "<strong>Limited features:</strong> the model only uses basic arithmetic properties. Adding more complex features (e.g., binary expansion, prime factors) could improve accuracy.",
    ch6_title: "Chapter 6: Conclusions and future work",
    s6_1_title: "6.1 Conclusions",
    s6_1_p: "This research demonstrates the feasibility of tackling classic open mathematical problems through a data science paradigm.",
    s6_1_li1: "An optimized algorithm was successfully implemented, enabling the exploration of recursive dynamical systems with computational efficiency.",
    s6_1_li2: "Statistical analysis revealed deterministic global structures underlying the apparent local randomness of the Collatz conjecture.",
    s6_1_li3: "The hypothesis was confirmed by building a regression model that, despite its limited accuracy, demonstrates that stopping time is not purely stochastic and can be predictively modeled to a significant degree.",
    s6_2_title: "6.2 Future work",
    s6_2_li1: "<strong>Feature engineering:</strong> investigate new predictive variables based on advanced algebraic properties of n.",
    s6_2_li2: "<strong>Scalability:</strong> implement algorithms on distributed computing systems (PySpark) to generate datasets with N > 10⁹.",
    s6_2_li3: "<strong>Advanced models:</strong> evaluate the use of Recurrent Neural Networks (LSTM) or Transformers, which are better suited to modeling long-term sequential dependencies.",
    ch7_title: "Chapter 7: Contributions and applications",
    ch7_intro: "This work makes contributions along two lines:",
    ch7_li1: "<strong>Computational mathematics:</strong> it provides a structured methodology for the stochastic analysis of unsolved conjectures.",
    ch7_li2: "<strong>Applied data science:</strong> it serves as a case study on the limits of predictability of Machine Learning algorithms in complex deterministic dynamical systems, with implications for cryptography, chaos analysis, and algorithmic complexity theory.",
    fig1_caption: "Figure 1. Global stopping time distribution for N = 100,000 sequences.",
    fig2_caption: "Figure 2. Scatter plot of the initial number (n) versus stopping time.",
    fig3_caption: "Figure 3. Collatz trajectory for n = 27, on a logarithmic scale.",
    fig4_caption: "Figure 4. Random Forest model predictions vs. actual stopping time values.",
    end_note: "End of the thesis.",
    toc_abstract: "Abstract",
    toc_ch1: "1. Introduction",
    toc_ch2: "2. Framework",
    toc_ch3: "3. Methodology",
    toc_ch4: "4. Implementation",
    toc_ch5: "5. Results",
    toc_ch6: "6. Conclusions",
    toc_ch7: "7. Contributions",
    copy_code: "Copy code",
    close_label: "Close"
  },
  pt: {
    back_link: "&larr; Voltar ao portfólio",
    kicker: "Tese · Ciência de dados",
    title: "Análise Dinâmica Computacional e Modelagem Preditiva do Tempo de Parada na Sequência de Collatz por meio de Técnicas de Machine Learning",
    keywords: "<strong>Palavras-chave:</strong> Conjectura de Collatz, Sistemas Dinâmicos, Memoização, Machine Learning, Random Forest, Tempo de Parada.",
    abstract_title: "Resumo",
    abstract_body: "A conjectura de Collatz é um problema em aberto fundamental na teoria dos números que descreve um sistema dinâmico determinístico de formulação elementar, mas de comportamento complexo. Esta tese aborda o fenômeno a partir de uma abordagem estritamente computacional. O objetivo geral é analisar a dinâmica das órbitas geradas pela função de Collatz e desenvolver modelos de Machine Learning capazes de prever métricas descritivas-chave, especificamente o tempo de parada (<em>stopping time</em>). Para isso, foi projetado e implementado um algoritmo otimizado por memoização em Python para gerar um dataset de 100.000 sequências. Foi realizada uma Análise Exploratória de Dados (EDA) que revelou estruturas estatísticas globais subjacentes à aparente aleatoriedade local. Por fim, foi treinado um modelo de regressão baseado no algoritmo Random Forest, alcançando uma precisão preliminar na previsão do tempo de parada. Os resultados demonstram a viabilidade de empregar a ciência de dados para extrair conhecimento estruturado de sistemas matemáticos caóticos, permitindo caracterizar seu comportamento sem exigir uma demonstração analítica formal.",
    ch1_title: "Capítulo 1: Introdução",
    s1_1_title: "1.1 Formulação do problema",
    s1_1_p1: "A conjectura de Collatz, também conhecida como o problema 3n+1, constitui um dos enigmas não resolvidos mais notórios no campo da matemática pura. Proposta por Lothar Collatz em 1937, define uma transformação iterativa sobre o conjunto dos números inteiros positivos (ℤ⁺). Apesar de sua formulação elementar, a demonstração analítica de que toda sequência converge inexoravelmente para o ciclo trivial (4 → 2 → 1) permanece inalcançável para os métodos atuais da teoria dos números.",
    s1_1_p2: "O problema reside na natureza dual da transformação: a operação par (n/2) reduz o valor, enquanto a operação ímpar (3n+1) o aumenta. Essa alternância gera trajetórias, ou órbitas, que exibem um comportamento aparentemente caótico e errático antes de sucumbir à convergência. A ausência de um padrão linear ou de uma fórmula fechada para prever a duração dessas trajetórias (o \"tempo de parada\") motiva a necessidade de explorar o problema por meio de paradigmas alternativos.",
    s1_2_title: "1.2 Justificativa",
    s1_2_intro: "Dado que uma solução analítica formal parece estar fora do alcance da matemática contemporânea, a abordagem computacional surge como uma ferramenta de pesquisa válida e necessária. A análise de grandes volumes de dados (Big Data) gerados por simulação algorítmica permite:",
    s1_2_li1: "Caracterizar estatisticamente o comportamento global das sequências em amplos intervalos numéricos.",
    s1_2_li2: "Identificar padrões subjacentes ou \"clusters\" de comportamento que não são visíveis em análises de casos isolados.",
    s1_2_li3: "Testar a eficiência de estruturas de dados e algoritmos de otimização para lidar com problemas recursivos de alto custo computacional.",
    s1_2_li4: "Avaliar a aplicabilidade de algoritmos de Machine Learning para prever a dinâmica de sistemas dinâmicos determinísticos, porém localmente imprevisíveis.",
    s1_3_title: "1.3 Hipótese",
    s1_3_p: "Apesar do comportamento aparentemente caótico e da alta variabilidade local das órbitas individuais na sequência de Collatz, existem estruturas estatísticas globais determinísticas. Portanto, é possível treinar um modelo de Machine Learning supervisionado que, utilizando propriedades intrínsecas do número inicial n, preveja o tempo de parada (<em>stopping time</em>) com uma margem de erro definida.",
    ch2_title: "Capítulo 2: Referencial teórico e estado da arte",
    s2_1_title: "2.1 A função de Collatz",
    s2_1_intro: "Matematicamente, a conjectura é definida por uma função f: ℤ⁺ → ℤ⁺ expressa recursivamente da seguinte forma:",
    formula: "f(n) = n/2, se n ≡ 0 (mod 2)<br>f(n) = 3n + 1, se n ≡ 1 (mod 2)",
    s2_2_title: "2.2 Métricas críticas da trajetória",
    s2_2_intro: "Na análise computacional de Collatz, definem-se duas métricas fundamentais para cada número inicial n:",
    s2_2_li1: "<strong>Tempo de Parada (Stopping Time – σ(n)):</strong> o número de iterações ou passos necessários para que a sequência alcance o valor 1 pela primeira vez.",
    s2_2_li2: "<strong>Valor Máximo (Maximum Value – M(n)):</strong> o valor mais alto alcançado pela órbita antes de convergir.",
    s2_3_title: "2.3 Estado da arte computacional",
    s2_3_p1: "Historicamente, a pesquisa computacional sobre Collatz tem se concentrado na verificação por força bruta para encontrar contraexemplos (números que entram em ciclos diferentes ou divergem para o infinito). Até a data desta pesquisa, a conjectura foi verificada para todos os números menores que 2⁶⁸ por grupos de computação distribuída, sem que fossem encontradas anomalias.",
    s2_3_p2: "Recentemente, matemáticos como Terence Tao (2019) obtiveram avanços parciais utilizando métodos probabilísticos, demonstrando que \"quase todos\" os números têm um tempo de parada finito. No âmbito da ciência de dados, as tentativas de modelar preditivamente a sequência são limitadas, o que confere originalidade à abordagem desta tese.",
    ch3_title: "Capítulo 3: Metodologia",
    s3_1_title: "3.1 Abordagem de pesquisa",
    s3_1_p: "Esta pesquisa adota uma abordagem quantitativa, experimental e ex post facto. Baseia-se na geração de dados sintéticos por meio de simulação computacional e na posterior análise estocástica e modelagem preditiva.",
    s3_2_title: "3.2 Desenho algorítmico e otimização",
    s3_2_p1: "Para gerar o dataset, foi implementado um algoritmo em Python. Como a sequência é recursiva, muitos números compartilham \"sub-trajetórias\" (por exemplo, as órbitas de 3 e de 10 são distintas no início, mas, uma vez que 3 chega a 10, o restante é idêntico).",
    s3_2_p2: "<strong>Otimização por memoização:</strong> para evitar recalcular trajetórias já existentes e reduzir drasticamente a complexidade algorítmica de tempo de O(N × passos_médios) para aproximadamente O(N), utilizou-se uma estrutura de dados de Hash Map (dicionário em Python) para armazenar os tempos de parada já calculados. Quando o algoritmo encontra um número na órbita que já está no dicionário, interrompe o cálculo e soma o valor armazenado.",
    s3_3_title: "3.3 Ferramentas tecnológicas",
    s3_3_li1: "<strong>Linguagem:</strong> Python 3.x",
    s3_3_li2: "<strong>Manipulação de dados:</strong> Pandas",
    s3_3_li3: "<strong>Visualização:</strong> Matplotlib, Seaborn",
    s3_3_li4: "<strong>Machine Learning:</strong> Scikit-learn",
    s3_4_title: "3.4 Procedimento de geração de dados",
    s3_4_intro: "Foi gerado um dataset de N = 100.000 registros, começando em n = 1 até n = 100.000. Para cada n, foram extraídas as seguintes características (<em>features</em>):",
    s3_4_li1: "<code>stopping_time</code>: variável-alvo",
    s3_4_li2: "<code>max_value</code>: valor máximo alcançado",
    s3_4_li3: "<code>is_odd</code>: booleano indicando se n é ímpar",
    s3_4_li4: "<code>log_n</code>: logaritmo natural de n (para linearizar relações)",
    ch4_title: "Capítulo 4: Implementação técnica (código)",
    ch4_intro: "Neste capítulo é apresentado o código-fonte final, seguindo as boas práticas de programação (PEP 8) e formalizando os nomes das variáveis para um ambiente profissional.",
    s4_1_title: "4.1 Script principal de geração de dados e análise",
    s4_2_title: "4.2 Script de modelagem preditiva (Machine Learning)",
    ch5_title: "Capítulo 5: Resultados e discussão",
    s5_1_title: "5.1 Análise exploratória de dados (EDA)",
    s5_1_p1: "<strong>Distribuição do stopping time:</strong> o histograma dos tempos de parada mostra uma distribuição unimodal com assimetria positiva (<em>positive skewness</em>). A maioria dos números abaixo de 100.000 converge para 1 em uma faixa de aproximadamente 50 a 150 passos. É notável que a distribuição não é uniforme, o que sugere restrições estocásticas globais no sistema.",
    s5_1_p2: "<strong>Relação n vs stopping time:</strong> o diagrama de dispersão confirma a natureza caótica local do problema. Um pequeno incremento em n pode resultar em uma mudança drástica no tempo de parada. No entanto, observa-se uma \"nuvem\" de pontos densa, o que indica que o tempo de parada cresce de forma extremamente lenta (logarítmica ou polilogarítmica) em relação a n.",
    s5_1_p3: "<strong>Análise de trajetórias específicas:</strong> para compreender a dinâmica interna das sequências, é necessário observar o comportamento de valores individuais que apresentam alta complexidade algorítmica. Um caso emblemático na literatura matemática é o número n = 27. Apesar de ser um valor inicial pequeno, sua trajetória sofre uma expansão drástica, atingindo picos significativos antes de colapsar em direção ao ciclo trivial. A sequência exibe uma série de \"subidas\" e \"quedas\" que ilustram a natureza não linear e determinística do problema, em que uma operação ímpar (3n+1) pode triplicar o valor instantaneamente, prolongando o tempo de parada de forma imprevisível.",
    s5_1_p4: "<strong>Correlações:</strong> a matriz de correlação de Pearson mostra uma correlação extremamente baixa entre n e <code>stopping_time</code> (r ≈ 0,04). Isso confirma que modelos lineares simples (como uma regressão linear direta) são totalmente ineficazes para esse problema. A característica <code>is_odd</code> mostra uma correlação ligeiramente superior, mas ainda insuficiente.",
    s5_2_title: "5.2 Discussão do modelo preditivo",
    s5_2_p1: "O modelo Random Forest Regressor obteve um coeficiente de determinação (R²) de aproximadamente 0,25 (nota: esse valor varia de acordo com a execução, mas costuma ser baixo).",
    s5_2_p2: "<strong>Interpretação acadêmica dos resultados:</strong> um R² de 0,25 significa que o modelo consegue explicar apenas 25% da variabilidade do tempo de parada utilizando as variáveis fornecidas (<code>n</code>, <code>log_n</code>, <code>is_odd</code>). Em muitos campos da Data Science, um coeficiente tão baixo indicaria um modelo com pouca capacidade preditiva.",
    s5_2_p3: "<strong>Defesa da hipótese:</strong> ainda assim, para um problema de matemática pura considerado \"imprevisível\", um R² ≈ 0,25 é um resultado significativo. Embora os pontos não se alinhem perfeitamente sobre a diagonal na comparação entre previsões e valores reais, existe uma tendência clara; se a trajetória fosse puramente aleatória, os pontos estariam dispersos sem forma alguma e o R² seria próximo de 0. O modelo Random Forest conseguiu detectar estruturas não lineares e \"clusters\" de comportamento que permitem prever 25% da dinâmica. O erro médio absoluto (MAE) de ≈ 30 passos indica que, em média, o modelo se aproxima com uma margem de erro aceitável dada a natureza caótica do sistema.",
    s5_3_title: "5.3 Limitações do estudo",
    s5_3_li1: "<strong>Faixa de dados:</strong> N = 100.000 é um dataset pequeno para Machine Learning avançado. Os padrões descobertos podem não se generalizar para números muito grandes (2⁶⁸).",
    s5_3_li2: "<strong>Features limitadas:</strong> o modelo utiliza apenas propriedades aritméticas básicas. Adicionar características mais complexas (por exemplo, expansão binária, fatores primos) poderia melhorar a precisão.",
    ch6_title: "Capítulo 6: Conclusões e trabalhos futuros",
    s6_1_title: "6.1 Conclusões",
    s6_1_p: "A presente pesquisa demonstra a viabilidade de abordar problemas matemáticos clássicos em aberto por meio de um paradigma de ciência de dados.",
    s6_1_li1: "Foi implementado com sucesso um algoritmo otimizado que permite a exploração de sistemas dinâmicos recursivos com eficiência computacional.",
    s6_1_li2: "A análise estatística revelou estruturas globais determinísticas subjacentes à aparente aleatoriedade local da conjectura de Collatz.",
    s6_1_li3: "A hipótese foi confirmada ao construir um modelo de regressão que, embora com precisão limitada, demonstra que o tempo de parada não é puramente estocástico e pode ser modelado preditivamente em uma magnitude significativa.",
    s6_2_title: "6.2 Trabalhos futuros",
    s6_2_li1: "<strong>Engenharia de features:</strong> investigar novas variáveis preditoras baseadas em propriedades algébricas avançadas de n.",
    s6_2_li2: "<strong>Escalabilidade:</strong> implementar algoritmos em sistemas de computação distribuída (PySpark) para gerar datasets de N > 10⁹.",
    s6_2_li3: "<strong>Modelos avançados:</strong> avaliar o uso de Redes Neurais Recorrentes (LSTM) ou Transformers, que são mais adequados para modelar dependências sequenciais de longo prazo.",
    ch7_title: "Capítulo 7: Contribuições e aplicações",
    ch7_intro: "Este trabalho traz contribuições em duas vertentes:",
    ch7_li1: "<strong>Matemática computacional:</strong> fornece uma metodologia estruturada para a análise estocástica de conjecturas não resolvidas.",
    ch7_li2: "<strong>Ciência de dados aplicada:</strong> serve como estudo de caso sobre os limites da previsibilidade de algoritmos de Machine Learning em sistemas dinâmicos determinísticos complexos, com implicações em criptografia, análise de caos e teoria da complexidade algorítmica.",
    fig1_caption: "Figura 1. Distribuição global do stopping time para N = 100.000 sequências.",
    fig2_caption: "Figura 2. Dispersão entre o número inicial (n) e o stopping time.",
    fig3_caption: "Figura 3. Trajetória de Collatz para n = 27, em escala logarítmica.",
    fig4_caption: "Figura 4. Previsões do modelo Random Forest vs. valores reais de stopping time.",
    end_note: "Fim da tese.",
    toc_abstract: "Resumo",
    toc_ch1: "1. Introdução",
    toc_ch2: "2. Referencial teórico",
    toc_ch3: "3. Metodologia",
    toc_ch4: "4. Implementação",
    toc_ch5: "5. Resultados",
    toc_ch6: "6. Conclusões",
    toc_ch7: "7. Contribuições",
    copy_code: "Copiar código",
    close_label: "Fechar"
  },
  fr: {
    back_link: "&larr; Retour au portfolio",
    kicker: "Thèse · Science des données",
    title: "Analyse Dynamique Computationnelle et Modélisation Prédictive du Temps d'Arrêt dans la Séquence de Collatz au moyen de Techniques de Machine Learning",
    keywords: "<strong>Mots-clés :</strong> Conjecture de Collatz, Systèmes Dynamiques, Mémoïsation, Machine Learning, Random Forest, Temps d'Arrêt.",
    abstract_title: "Résumé",
    abstract_body: "La conjecture de Collatz est un problème ouvert fondamental de la théorie des nombres qui décrit un système dynamique déterministe à la formulation élémentaire mais au comportement complexe. Cette thèse aborde le phénomène sous un angle strictement computationnel. L'objectif général est d'analyser la dynamique des orbites générées par la fonction de Collatz et de développer des modèles de Machine Learning capables de prédire des métriques descriptives clés, en particulier le temps d'arrêt (<em>stopping time</em>). Pour cela, un algorithme optimisé par mémoïsation a été conçu et implémenté en Python afin de générer un jeu de données de 100 000 séquences. Une Analyse Exploratoire des Données (AED) a été réalisée, révélant des structures statistiques globales sous-jacentes à l'apparent hasard local. Enfin, un modèle de régression basé sur l'algorithme Random Forest a été entraîné, atteignant une précision préliminaire dans la prédiction du temps d'arrêt. Les résultats démontrent la faisabilité d'utiliser la science des données pour extraire des connaissances structurées de systèmes mathématiques chaotiques, permettant de caractériser leur comportement sans nécessiter de démonstration analytique formelle.",
    ch1_title: "Chapitre 1 : Introduction",
    s1_1_title: "1.1 Énoncé du problème",
    s1_1_p1: "La conjecture de Collatz, également connue sous le nom de problème 3n+1, constitue l'une des énigmes non résolues les plus notoires du domaine des mathématiques pures. Proposée par Lothar Collatz en 1937, elle définit une transformation itérative sur l'ensemble des entiers positifs (ℤ⁺). Malgré sa formulation élémentaire, la démonstration analytique selon laquelle toute séquence converge inexorablement vers le cycle trivial (4 → 2 → 1) reste hors de portée des méthodes actuelles de la théorie des nombres.",
    s1_1_p2: "Le problème réside dans la nature duale de la transformation : l'opération paire (n/2) réduit la valeur, tandis que l'opération impaire (3n+1) l'augmente. Cette alternance génère des trajectoires, ou orbites, qui présentent un comportement apparemment chaotique et erratique avant de finir par converger. L'absence de motif linéaire ou de formule close permettant de prédire la longueur de ces trajectoires (le « temps d'arrêt ») justifie la nécessité d'explorer le problème au moyen de paradigmes alternatifs.",
    s1_2_title: "1.2 Justification",
    s1_2_intro: "Étant donné qu'une solution analytique formelle semble hors de portée des mathématiques contemporaines, l'approche computationnelle s'impose comme un outil de recherche valide et nécessaire. L'analyse de grands volumes de données (Big Data) générés par simulation algorithmique permet de :",
    s1_2_li1: "Caractériser statistiquement le comportement global des séquences sur de vastes plages numériques.",
    s1_2_li2: "Identifier des motifs sous-jacents ou des « clusters » de comportement qui ne sont pas visibles dans l'analyse de cas isolés.",
    s1_2_li3: "Tester l'efficacité de structures de données et d'algorithmes d'optimisation pour traiter des problèmes récursifs à coût de calcul élevé.",
    s1_2_li4: "Évaluer l'applicabilité d'algorithmes de Machine Learning pour prédire la dynamique de systèmes dynamiques déterministes mais localement imprévisibles.",
    s1_3_title: "1.3 Hypothèse",
    s1_3_p: "Malgré le comportement apparemment chaotique et la forte variabilité locale des orbites individuelles dans la séquence de Collatz, il existe des structures statistiques globales déterministes. Il est donc possible d'entraîner un modèle de Machine Learning supervisé qui, à partir de propriétés intrinsèques du nombre initial n, prédit le temps d'arrêt (<em>stopping time</em>) avec une marge d'erreur définie.",
    ch2_title: "Chapitre 2 : Cadre théorique et état de l'art",
    s2_1_title: "2.1 La fonction de Collatz",
    s2_1_intro: "Mathématiquement, la conjecture est définie par une fonction f : ℤ⁺ → ℤ⁺ exprimée de manière récursive comme suit :",
    formula: "f(n) = n/2, si n ≡ 0 (mod 2)<br>f(n) = 3n + 1, si n ≡ 1 (mod 2)",
    s2_2_title: "2.2 Métriques critiques de la trajectoire",
    s2_2_intro: "Dans l'analyse computationnelle de Collatz, deux métriques fondamentales sont définies pour chaque nombre initial n :",
    s2_2_li1: "<strong>Temps d'Arrêt (Stopping Time – σ(n)) :</strong> le nombre d'itérations ou d'étapes nécessaires pour que la séquence atteigne la valeur 1 pour la première fois.",
    s2_2_li2: "<strong>Valeur Maximale (Maximum Value – M(n)) :</strong> la valeur la plus élevée atteinte par l'orbite avant sa convergence.",
    s2_3_title: "2.3 État de l'art computationnel",
    s2_3_p1: "Historiquement, la recherche computationnelle sur Collatz s'est concentrée sur la vérification par force brute afin de trouver des contre-exemples (nombres entrant dans des cycles différents ou divergeant vers l'infini). À la date de cette recherche, la conjecture a été vérifiée pour tous les nombres inférieurs à 2⁶⁸ par des groupes de calcul distribué, sans qu'aucune anomalie n'ait été trouvée.",
    s2_3_p2: "Plus récemment, des mathématiciens comme Terence Tao (2019) ont réalisé des avancées partielles à l'aide de méthodes probabilistes, montrant que « presque tous » les nombres ont un temps d'arrêt fini. Dans le domaine de la science des données, les tentatives de modélisation prédictive de la séquence restent limitées, ce qui confère de l'originalité à l'approche de cette thèse.",
    ch3_title: "Chapitre 3 : Méthodologie",
    s3_1_title: "3.1 Approche de recherche",
    s3_1_p: "Cette recherche adopte une approche quantitative, expérimentale et ex post facto. Elle repose sur la génération de données synthétiques par simulation computationnelle, suivie d'une analyse stochastique et d'une modélisation prédictive.",
    s3_2_title: "3.2 Conception algorithmique et optimisation",
    s3_2_p1: "Pour générer le jeu de données, un algorithme a été implémenté en Python. La séquence étant récursive, de nombreux nombres partagent des « sous-trajectoires » (par exemple, les orbites de 3 et de 10 sont distinctes au départ, mais dès que 3 atteint 10, le reste est identique).",
    s3_2_p2: "<strong>Optimisation par mémoïsation :</strong> afin d'éviter de recalculer des trajectoires déjà connues et de réduire drastiquement la complexité temporelle de l'algorithme, la faisant passer de O(N × pas_moyen) à environ O(N), une structure de données de type Hash Map (un dictionnaire en Python) a été utilisée pour stocker les temps d'arrêt déjà calculés. Lorsque l'algorithme rencontre, dans l'orbite, un nombre déjà présent dans le dictionnaire, il arrête le calcul et ajoute la valeur stockée.",
    s3_3_title: "3.3 Outils technologiques",
    s3_3_li1: "<strong>Langage :</strong> Python 3.x",
    s3_3_li2: "<strong>Traitement des données :</strong> Pandas",
    s3_3_li3: "<strong>Visualisation :</strong> Matplotlib, Seaborn",
    s3_3_li4: "<strong>Machine Learning :</strong> Scikit-learn",
    s3_4_title: "3.4 Procédure de génération des données",
    s3_4_intro: "Un jeu de données de N = 100 000 enregistrements a été généré, de n = 1 à n = 100 000. Pour chaque n, les caractéristiques (<em>features</em>) suivantes ont été extraites :",
    s3_4_li1: "<code>stopping_time</code> : variable cible",
    s3_4_li2: "<code>max_value</code> : valeur maximale atteinte",
    s3_4_li3: "<code>is_odd</code> : booléen indiquant si n est impair",
    s3_4_li4: "<code>log_n</code> : logarithme népérien de n (pour linéariser les relations)",
    ch4_title: "Chapitre 4 : Mise en œuvre technique (code)",
    ch4_intro: "Ce chapitre présente le code source final, en suivant les bonnes pratiques de programmation (PEP 8) et en formalisant les noms de variables pour un environnement professionnel.",
    s4_1_title: "4.1 Script principal de génération de données et d'analyse",
    s4_2_title: "4.2 Script de modélisation prédictive (Machine Learning)",
    ch5_title: "Chapitre 5 : Résultats et discussion",
    s5_1_title: "5.1 Analyse exploratoire des données (AED)",
    s5_1_p1: "<strong>Distribution du stopping time :</strong> l'histogramme des temps d'arrêt montre une distribution unimodale avec une asymétrie positive (<em>positive skewness</em>). La plupart des nombres inférieurs à 100 000 convergent vers 1 en 50 à 150 étapes environ. Il est notable que la distribution ne soit pas uniforme, ce qui suggère des contraintes stochastiques globales au sein du système.",
    s5_1_p2: "<strong>Relation entre n et le stopping time :</strong> le diagramme de dispersion confirme la nature chaotique locale du problème. Une petite augmentation de n peut entraîner un changement radical du temps d'arrêt. On observe cependant un « nuage » de points dense, indiquant que le temps d'arrêt croît de façon extrêmement lente (logarithmique ou polylogarithmique) par rapport à n.",
    s5_1_p3: "<strong>Analyse de trajectoires spécifiques :</strong> pour comprendre la dynamique interne des séquences, il est nécessaire d'observer le comportement de valeurs individuelles présentant une forte complexité algorithmique. Un cas emblématique de la littérature mathématique est le nombre n = 27. Bien qu'il s'agisse d'une petite valeur initiale, sa trajectoire connaît une expansion spectaculaire, atteignant des pics significatifs avant de s'effondrer vers le cycle trivial. La séquence présente une série de « montées » et de « chutes » illustrant la nature non linéaire et déterministe du problème, où une opération impaire (3n+1) peut instantanément tripler la valeur, prolongeant de façon imprévisible le temps d'arrêt.",
    s5_1_p4: "<strong>Corrélations :</strong> la matrice de corrélation de Pearson montre une corrélation extrêmement faible entre n et <code>stopping_time</code> (r ≈ 0,04). Cela confirme que les modèles linéaires simples (comme une régression linéaire directe) sont totalement inefficaces pour ce problème. La variable <code>is_odd</code> présente une corrélation légèrement supérieure, mais elle reste insuffisante.",
    s5_2_title: "5.2 Discussion du modèle prédictif",
    s5_2_p1: "Le modèle Random Forest Regressor a obtenu un coefficient de détermination (R²) d'environ 0,25 (remarque : cette valeur varie selon l'exécution, mais reste généralement faible).",
    s5_2_p2: "<strong>Interprétation académique des résultats :</strong> un R² de 0,25 signifie que le modèle ne peut expliquer que 25 % de la variabilité du temps d'arrêt à partir des variables fournies (<code>n</code>, <code>log_n</code>, <code>is_odd</code>). Dans de nombreux domaines de la Data Science, un coefficient aussi faible indiquerait un modèle à faible pouvoir prédictif.",
    s5_2_p3: "<strong>Défense de l'hypothèse :</strong> néanmoins, pour un problème de mathématiques pures considéré comme « imprévisible », un R² ≈ 0,25 constitue un résultat significatif. Bien que les points ne s'alignent pas parfaitement sur la diagonale lors de la comparaison entre prédictions et valeurs réelles, une tendance claire se dégage ; si la trajectoire était purement aléatoire, les points seraient dispersés sans forme particulière et le R² serait proche de 0. Le modèle Random Forest a réussi à détecter des structures non linéaires et des « clusters » de comportement permettant de prédire 25 % de la dynamique. L'erreur absolue moyenne (MAE) d'environ 30 pas indique qu'en moyenne, le modèle s'approche du résultat avec une marge d'erreur acceptable compte tenu de la nature chaotique du système.",
    s5_3_title: "5.3 Limites de l'étude",
    s5_3_li1: "<strong>Étendue des données :</strong> N = 100 000 est un jeu de données restreint pour du Machine Learning avancé. Les motifs découverts pourraient ne pas se généraliser à de très grands nombres (2⁶⁸).",
    s5_3_li2: "<strong>Caractéristiques limitées :</strong> le modèle n'utilise que des propriétés arithmétiques de base. L'ajout de caractéristiques plus complexes (par exemple, expansion binaire, facteurs premiers) pourrait améliorer la précision.",
    ch6_title: "Chapitre 6 : Conclusions et travaux futurs",
    s6_1_title: "6.1 Conclusions",
    s6_1_p: "Cette recherche démontre la faisabilité d'aborder des problèmes mathématiques ouverts classiques au moyen d'un paradigme de science des données.",
    s6_1_li1: "Un algorithme optimisé a été implémenté avec succès, permettant l'exploration de systèmes dynamiques récursifs avec une efficacité computationnelle.",
    s6_1_li2: "L'analyse statistique a révélé des structures globales déterministes sous-jacentes à l'apparent hasard local de la conjecture de Collatz.",
    s6_1_li3: "L'hypothèse a été confirmée par la construction d'un modèle de régression qui, bien que d'une précision limitée, démontre que le temps d'arrêt n'est pas purement stochastique et peut être modélisé de manière prédictive dans une mesure significative.",
    s6_2_title: "6.2 Travaux futurs",
    s6_2_li1: "<strong>Ingénierie des caractéristiques :</strong> étudier de nouvelles variables prédictives fondées sur des propriétés algébriques avancées de n.",
    s6_2_li2: "<strong>Scalabilité :</strong> implémenter des algorithmes sur des systèmes de calcul distribué (PySpark) afin de générer des jeux de données avec N > 10⁹.",
    s6_2_li3: "<strong>Modèles avancés :</strong> évaluer l'usage de Réseaux de Neurones Récurrents (LSTM) ou de Transformers, mieux adaptés à la modélisation de dépendances séquentielles à long terme.",
    ch7_title: "Chapitre 7 : Contributions et applications",
    ch7_intro: "Ce travail apporte des contributions selon deux axes :",
    ch7_li1: "<strong>Mathématiques computationnelles :</strong> il fournit une méthodologie structurée pour l'analyse stochastique de conjectures non résolues.",
    ch7_li2: "<strong>Science des données appliquée :</strong> il sert d'étude de cas sur les limites de prévisibilité des algorithmes de Machine Learning dans des systèmes dynamiques déterministes complexes, avec des implications en cryptographie, en analyse du chaos et en théorie de la complexité algorithmique.",
    fig1_caption: "Figure 1. Distribution globale du stopping time pour N = 100 000 séquences.",
    fig2_caption: "Figure 2. Nuage de points entre le nombre initial (n) et le stopping time.",
    fig3_caption: "Figure 3. Trajectoire de Collatz pour n = 27, à l'échelle logarithmique.",
    fig4_caption: "Figure 4. Prédictions du modèle Random Forest vs. valeurs réelles du stopping time.",
    end_note: "Fin de la thèse.",
    toc_abstract: "Résumé",
    toc_ch1: "1. Introduction",
    toc_ch2: "2. Cadre théorique",
    toc_ch3: "3. Méthodologie",
    toc_ch4: "4. Mise en œuvre",
    toc_ch5: "5. Résultats",
    toc_ch6: "6. Conclusions",
    toc_ch7: "7. Contributions",
    copy_code: "Copier le code",
    close_label: "Fermer"
  }
};

const THESIS_STORAGE_KEY = "portfolio-lang";

function detectThesisLang(){
  const saved = localStorage.getItem(THESIS_STORAGE_KEY);
  if (saved && thesisTranslations[saved]) return saved;
  const nav = (navigator.language || "es").slice(0, 2);
  return thesisTranslations[nav] ? nav : "es";
}

let thesisLangSwitchTimeout = null;

function setThesisLanguage(lang){
  if (!thesisTranslations[lang]) return;
  const dict = thesisTranslations[lang];

  document.body.classList.add("is-switching-lang");
  if (thesisLangSwitchTimeout) window.clearTimeout(thesisLangSwitchTimeout);
  thesisLangSwitchTimeout = window.setTimeout(() => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-label]").forEach(el => {
      const key = el.getAttribute("data-i18n-label");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem(THESIS_STORAGE_KEY, lang);
    document.body.classList.remove("is-switching-lang");
    thesisLangSwitchTimeout = null;
  }, 100);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setThesisLanguage(btn.getAttribute("data-lang")));
});

setThesisLanguage(detectThesisLang());

/* ==========================================================
   Reading progress bar
   ========================================================== */
const progressLine = document.getElementById("progressLine");
if (progressLine){
  function onScroll(){
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressLine.style.width = progress + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ==========================================================
   Floating table of contents (scrollspy)
   ========================================================== */
const tocLinks = document.querySelectorAll(".thesis-toc a");
if (tocLinks.length){
  const tocSections = [];
  tocLinks.forEach(link => {
    const section = document.getElementById(link.getAttribute("href").slice(1));
    if (section) tocSections.push({ section, link });
  });

  const tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const match = tocSections.find(s => s.section === entry.target);
      tocLinks.forEach(a => a.classList.remove("active"));
      if (match) match.link.classList.add("active");
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });

  tocSections.forEach(({ section }) => tocObserver.observe(section));
}

/* ==========================================================
   Figure lightbox
   ========================================================== */
const thesisLightbox = document.getElementById("thesisLightbox");
const thesisLightboxImg = document.getElementById("thesisLightboxImg");
const thesisLightboxClose = document.getElementById("thesisLightboxClose");

if (thesisLightbox && thesisLightboxImg && thesisLightboxClose){
  function openLightbox(src, alt){
    thesisLightboxImg.src = src;
    thesisLightboxImg.alt = alt;
    thesisLightbox.classList.add("open");
  }
  function closeLightbox(){
    thesisLightbox.classList.remove("open");
  }

  document.querySelectorAll(".thesis-figure img").forEach(img => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });
  thesisLightboxClose.addEventListener("click", closeLightbox);
  thesisLightbox.addEventListener("click", (e) => {
    if (e.target === thesisLightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ==========================================================
   Copy code blocks to clipboard
   ========================================================== */
document.querySelectorAll(".thesis-code-copy").forEach(btn => {
  btn.addEventListener("click", () => {
    const code = btn.nextElementSibling;
    if (!code || !navigator.clipboard) return;
    navigator.clipboard.writeText(code.textContent).then(() => {
      btn.classList.add("copied");
      window.setTimeout(() => btn.classList.remove("copied"), 1500);
    }).catch(() => {});
  });
});
