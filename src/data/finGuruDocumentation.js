export const finGuruDocNavigation = [
  { id: "project-overview", label: "Project Overview" },
  { id: "problem-statement", label: "Problem Statement", children: [{ id: "proposed-solution", label: "Proposed Solution" }] },
  { id: "user-stories", label: "User Stories" },
  { id: "tech-stack", label: "Tech Stack" },
  {
    id: "core-features",
    label: "Core Features",
    children: [
      { id: "conversational-assistant", label: "Conversational Assistant" },
      { id: "planner-agent", label: "Planner Agent" },
      { id: "asynchronous-ingestion", label: "Asynchronous Ingestion" },
      { id: "document-analysis", label: "Document Analysis" },
      { id: "hybrid-retrieval", label: "Hybrid Retrieval" },
      { id: "reranked-rag", label: "Reranked RAG Answers" },
      { id: "conversation-memory", label: "Conversation Memory" },
      { id: "file-lifecycle", label: "File Lifecycle" },
      { id: "pipeline-metrics", label: "Pipeline Metrics" }
    ]
  },
  {
    id: "design-decisions",
    label: "Design Decisions",
    children: [
      { id: "hybrid-search", label: "Hybrid Retrieval" },
      { id: "kafka-ingestion", label: "Kafka Ingestion" },
      { id: "llm-chunking", label: "LLM-guided Chunking" },
      { id: "separate-stores", label: "Separate Stores" },
      { id: "conversation-summaries", label: "Conversation Summaries" },
      { id: "credit-restrictions", label: "Credit Restrictions" }
    ]
  },
  { id: "architecture-diagram", label: "Architecture Diagram" },
  { id: "er-diagram", label: "ER Diagram" }
];

export const finGuruProjectOverview = {
  opening: [
    "Ever opened a bank statement and felt like it was written in a language only spreadsheets understand?",
    "What if it could read your payslip, understand your bank statement, check your recent transactions, review your bills, and use all of that context to help answer one financial question?"
  ],
  paragraphs: [
    "Fin Guru is an intelligent personal finance assistant designed to provide users with a more complete understanding of their financial situation.",
    "Unlike a document chatbot that only answers questions from uploaded files, Fin Guru combines two important sources of financial information. It understands documents uploaded by the user, such as bank statements, payslips, offer letters, and financial policies. It can also access authorised, up-to-date information from the Savings Saga application, including transactions, bills, spending patterns, and financial analytics.",
    "This combination gives Fin Guru a broader view of the user's financial profile. For example, it can use information from a bank statement together with recent transactions or upcoming bills from Savings Saga to provide a more relevant and contextual response.",
    "Fin Guru is therefore more than a document question-answering tool. It acts as a connected financial companion that helps users understand their records, identify patterns, ask informed questions, and make more thoughtful financial decisions based on both their stored documents and current financial activity."
  ],
  image: { src: "/projects/fin-guru/image1.png", alt: "Fin Guru application interface" }
};

export const finGuruProblemStatement = [
  "Personal financial information is spread across many places: bank statements, payslips, offer letters, tax documents, bills, transaction histories, and financial applications. Finding one specific answer often means opening multiple files, searching through long documents, or manually comparing information that exists in completely different systems.",
  "Document chatbots can make uploaded files easier to search, but they usually understand only the documents provided to them. They may not know the user's latest spending, upcoming bills, or current financial patterns. On the other hand, finance applications can provide live transaction and analytics data, but they often cannot understand the detailed context contained in a payslip, bank statement, policy document, or other uploaded file.",
  "This creates a gap between a user's documented financial history and their current financial activity. A user may ask, \"Can I afford this expense?\" but answering meaningfully may require information from both sources: what the user earns or owes according to their documents, and how they are currently spending according to their finance application.",
  "A useful financial assistant must therefore bring these sources together. It should understand uploaded documents, access authorised live data from the user's finance application, distinguish between historical and current information, and provide responses based on the complete financial context.",
  "Without this broader context, an assistant may provide answers that are incomplete, outdated, or disconnected from the user's actual financial situation. Fin Guru addresses this problem by combining document understanding with Savings Saga's live financial tools, creating a more complete and reliable view of the user's finances."
];

export const finGuruProposedSolution = [
  "Fin Guru provides a connected personal finance assistant that brings together two sources of financial knowledge: documents uploaded by the user and live financial information available through the Savings Saga application.",
  "Users can upload documents such as bank statements, payslips, offer letters, tax files, and financial policies. These documents are securely stored, analysed, categorised, and prepared for future questions. The system identifies the type and structure of each document so that information can be retrieved in a way that suits its content.",
  "When a user asks a question, Fin Guru determines whether the answer should come from an uploaded document, live Savings Saga data, or both. For example, a question about a payslip may require document-based information, while a question about current spending may require live transaction and analytics data. A broader question, such as whether the user can afford an upcoming expense, may require the assistant to combine income information from a document with current spending and bill information from Savings Saga.",
  "The assistant retrieves relevant information, checks the available financial context, and generates a response grounded in the user's data instead of relying only on general model knowledge or old conversation messages. Conversation history is also maintained through summaries, allowing the assistant to preserve useful context without continuously sending the entire conversation to the language model.",
  "At its core, Fin Guru is designed to provide a more complete view of personal finances by connecting financial documents with current financial activity. This enables more relevant explanations, better-informed financial discussions, and more practical decision support."
];

export const finGuruUserStories = [
  "As a user, I want Fin Guru to analyse my income, expenses, bills, savings, and financial documents together so that I can understand my complete financial position.",
  "As a user, I want to identify where most of my money is going and recognise recurring or unnecessary spending patterns so that I can improve my financial habits.",
  "As a user, I want to compare my needs, wants, and savings across different months so that I can measure whether my financial behaviour is improving.",
  "As a user, I want to understand why my savings increased or decreased in a particular month and which transactions or bills contributed to that change.",
  "As a user, I want Fin Guru to consider my current spending, upcoming bills, income, and savings goals so that I can make better decisions before taking on a new expense.",
  "As a user, I want information from my payslips, bank statements, and other documents to be combined with my latest Savings Saga data so that the guidance reflects my actual financial situation.",
  "As a user, I want practical financial suggestions supported by my real data so that I can improve my savings, work toward financial goals, and understand the reasoning behind each suggestion."
];

export const finGuruTechnology = [
  ["Category", "Technology", "Purpose"],
  ["Language", "Java 17", "Primary backend language."],
  ["Framework", "Spring Boot 3.5.12", "REST APIs, dependency injection, configuration, and application runtime."],
  ["AI framework", "Spring AI 1.0.9", "Chat model, embedding model, tool calling, and OpenAI integration."],
  ["LLM", "OpenAI models", "Planner responses, document analysis, and RAG answer generation."],
  ["Data base", "PostgreSQL", "Conversation, message, and uploaded-document metadata storage."],
  ["Object storage", "AWS SDK S3 client", "Stores uploaded files using a configurable S3-compatible endpoint."],
  ["Vector database", "Qdrant", "Stores document embeddings and retrieves semantically similar chunks."],
  ["Keyword search", "Apache Lucene 9.12.2", "BM25 lexical retrieval over indexed document chunks."],
  ["Reranking", "Jina AI reranker", "Reranks hybrid retrieval candidates before final answer generation."],
  ["Messaging", "Apache Kafka + Spring Kafka", "Triggers asynchronous document ingestion after upload."],
  ["Document parsing", "Apache PDFBox and Apache POI", "Extracts text from PDF and DOCX files."],
  ["Security", "Spring Security + JWT", "Protects APIs and propagates the authenticated user context."],
  ["Observability", "Micrometer + Spring Boot Actuator", "Tracks pipeline timing, processed/failed documents, and health."],
  ["Build and tests", "Maven + JUnit 5", "Dependency management, packaging, unit tests, and retrieval evaluations."]
];

export const finGuruCoreFeatures = [
  {
    id: "conversational-assistant",
    title: "Conversational Finance Assistant",
    paragraphs: ["Accepts natural-language questions through the /chat API and stores user and assistant messages for continuity."],
    images: [{ src: "/projects/fin-guru/image2.png", alt: "Fin Guru conversational assistant interface" }]
  },
  {
    id: "planner-agent",
    title: "Tool-Enabled Planner Agent",
    paragraphs: ["The planner can use transaction, bill, analytics, helper, and RAG tools. It supports a deliberate mode using gpt-5-mini and a faster response mode using gpt-4.1-mini."],
    images: []
  },
  {
    id: "asynchronous-ingestion",
    title: "Asynchronous Document Ingestion",
    paragraphs: ["A user-document-uploaded Kafka event starts ingestion outside the upload request, allowing file upload and document processing to be separated."],
    images: []
  },
  {
    id: "document-analysis",
    title: "LLM-Guided Document Analysis",
    paragraphs: ["The ingestion prompt identifies a document type, selects PAGE, DOCUMENT, or FIXED_SIZE chunking, recommends chunk settings where required, and creates a short summary."],
    images: []
  },
  {
    id: "hybrid-retrieval",
    title: "Hybrid Retrieval",
    paragraphs: ["Runs BM25 keyword retrieval through Lucene and semantic vector retrieval through Qdrant, filters both by user ID, and combines results with Reciprocal Rank Fusion."],
    images: []
  },
  {
    id: "reranked-rag",
    title: "Reranked RAG Answers",
    paragraphs: ["The highest-ranked hybrid candidates are reranked through Jina AI before the final context is sent to the RAG response model."],
    images: []
  },
  {
    id: "conversation-memory",
    title: "Conversation Memory Management",
    paragraphs: ["Persists conversations and messages, then creates a summary once the recent context reaches the configured token threshold."],
    images: []
  },
  {
    id: "file-lifecycle",
    title: "File Lifecycle Management",
    paragraphs: ["Lists user files, downloads objects, and deletes file metadata and vector representations when a document is removed."],
    images: [{ src: "/projects/fin-guru/image3.png", alt: "Fin Guru document and file management interface" }]
  },
  {
    id: "pipeline-metrics",
    title: "Pipeline Metrics and Document States",
    paragraphs: ["Tracks processing time and success/failure counters. Documents move through states such as PROCESSING, COMPLETED, REJECTED, and SERVER_ERROR."],
    images: []
  }
];

export const finGuruDesignDecisions = [
  {
    id: "hybrid-search",
    title: "Hybrid retrieval instead of a single search strategy",
    paragraphs: ["Keyword search is strong when users use exact names, phrases, account identifiers, or policy terms. Vector search is stronger when the question uses different wording from the source document. FinanceAI runs both approaches, filters both by user ID, and combines their rankings using Reciprocal Rank Fusion. This reduces dependence on one retrieval failure mode, while Jina reranking further improves the ordering of the final candidates."]
  },
  {
    id: "kafka-ingestion",
    title: "Asynchronous ingestion with Kafka",
    paragraphs: ["Uploading a file and processing a file have different latency and failure characteristics. The upload path stores the object and metadata quickly, then publishes UserDocumentUploadedEvent. A consumer starts the heavier parsing, LLM, embedding, Qdrant, and Lucene work. This prevents the upload request from waiting for the complete AI pipeline and creates a clear place for retries and consumer scaling. The current system would benefit from adding retry and dead-letter handling as a future production hardening step."]
  },
  {
    id: "llm-chunking",
    title: "LLM-guided chunking strategy",
    paragraphs: ["Different documents have different retrieval structures. A short resume or offer letter may be meaningful as one document, a bank statement may be better represented page by page, and a long policy document may require fixed-size chunks with overlap. The ingestion prompt selects DOCUMENT, PAGE, or FIXED_SIZE and can recommend chunk size and overlap. This keeps chunking aligned with document structure instead of applying one arbitrary rule to every file."]
  },
  {
    id: "separate-stores",
    title: "Separate stores for source files, metadata, and search representations",
    paragraphs: ["S3-compatible storage is used for the original file, PostgreSQL stores ownership and document lifecycle metadata, Qdrant stores semantic vectors, and Lucene stores the local lexical index. Each store is used for the capability it handles best. The trade-off is that deletion and failure recovery must keep several representations consistent."]
  },
  {
    id: "conversation-summaries",
    title: "Conversation summaries for token control",
    paragraphs: ["Full conversation history becomes increasingly expensive and can reduce the useful context available to the model. FinanceAI stores messages but sends the latest summary plus messages created after that summary when constructing the next request. A new summary is generated after the configured token threshold is reached, preserving continuity while controlling prompt size."]
  },
  {
    id: "credit-restrictions",
    title: "Credits restrictions to the user",
    paragraphs: ["In order to avoid exploitation of the current LLM architecture and cost optimization. Every user gets fixed number of credits (20 credits refreshed every 24 hours) for higher reasoning models. Hence users can opt to get detailed analytical answer based on the complexity of the query and user demands without shotting up the application cost"]
  }
];

export const finGuruDiagrams = {
  architecture: { src: "/projects/fin-guru/image4.png", alt: "Fin Guru architecture diagram" },
  erDiagram: { src: "/projects/fin-guru/image5.png", alt: "Fin Guru entity relationship diagram" }
};
