import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'himalaya',
    title: 'Himalaya',
    kind: 'Production ERP backend',
    start: 'Nov 2023',
    end: null,
    categories: ['backend', 'data-engineering'],
    summary:
      'REST APIs and relational data layer for a multi-module ERP—modeling domains, migrations, and stable contracts for client apps.',
    problem:
      'Business operations needed a single source of truth across modules (e.g. inventory and related flows) with consistent APIs for internal clients.',
    dataSource:
      'Operational data in PostgreSQL: normalized entities, transactional writes, and read paths shaped by product screens and reports.',
    approach:
      'Model domains in SQLAlchemy, evolve schema with migrations, expose resources through FastAPI with validation and clear layering between routes and persistence.',
    architecture:
      'Python service + PostgreSQL; SQLAlchemy ORM and Alembic-style migration workflow; REST surface consumed by ERP clients.',
    impact:
      'Supports ongoing ERP delivery: easier onboarding for engineers via clearer models and endpoints, and safer schema change discipline for production.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST'],
    links: [],
  },
  {
    id: 'tuteeline',
    title: 'Tuteeline',
    kind: 'Admissions platform backend',
    start: 'Dec 2022',
    end: 'Nov 2023',
    categories: ['backend', 'data-engineering'],
    summary:
      'GraphQL API and PostgreSQL backing a student/institute admissions product—recommendations, chat, and consistent relational design.',
    problem:
      'Institutes and students needed guided application workflows, relevant suggestions, and messaging without breaking relational integrity across modules.',
    dataSource:
      'Application entities and user-activity signals stored in PostgreSQL; graph layer over structured tables for flexible client queries.',
    approach:
      'Implemented Gqlgen resolvers and GORM persistence; designed recommendation inputs and ranking with fallbacks; built chat persistence and retrieval aligned with access patterns.',
    architecture:
      'Go services, PostgreSQL, GraphQL (Gqlgen) over relational data; separate concerns for recommendations and messaging vs. core admissions records.',
    impact:
      'Delivered end-to-end features for a live product: searchable lists, multi-step data consistency, and recommendation/chat experiences grounded in real schema design.',
    stack: ['Go', 'Gqlgen', 'GORM', 'PostgreSQL', 'GraphQL'],
    links: [],
  },
  {
    id: 'sentiment-movie',
    title: 'Sentiment analysis of movie reviews',
    kind: 'Deep learning (NLP-style)',
    start: 'Sep 2023',
    end: 'Sep 2023',
    categories: ['ml', 'analytics'],
    summary:
      'Neural model to classify movie review text as positive or negative—end-to-end from text input to prediction.',
    problem:
      'Demonstrate a concrete NLP-style task: learn patterns from review text and output a binary sentiment label for evaluation.',
    dataSource:
      'Labeled movie review text (standard coursework-style corpus; public benchmark-style setup).',
    approach:
      'Text preprocessing, tokenization/embedding strategy appropriate to the assignment, train a deep learning classifier, and evaluate on held-out data with error inspection.',
    architecture:
      'Python training pipeline; model artifacts for inference; simple batch or single-example prediction path for demonstration.',
    impact:
      'Shows ability to frame an ML problem, train and validate a model, and interpret failures—baseline for stronger production ML later.',
    stack: ['Python', 'Deep learning', 'NLP', 'Classification'],
    links: [],
  },
  {
    id: 'salary-eda',
    title: 'Salary dataset analysis',
    kind: 'Exploratory data analysis',
    start: 'Jan 2022',
    end: 'Aug 2023',
    categories: ['analytics'],
    summary:
      'Structured EDA on salary records—slicing by country and race, summarizing distributions, and visualizing patterns with Pandas and Matplotlib.',
    problem:
      'Explore how compensation varies across dimensions in the dataset and communicate findings clearly to a technical audience.',
    dataSource:
      'Tabular salary dataset (CSV-style) with demographic and geography fields; loaded into Pandas for manipulation.',
    approach:
      'Cleaning and typing, group-wise aggregates, pivot-style summaries, and matplotlib charts to compare segments and highlight outliers or skew.',
    architecture:
      'Notebook-oriented workflow: in-memory analytics in Pandas; reproducible steps suitable for export to a short report or deck.',
    impact:
      'Practice turning raw tables into questions, summaries, and visuals—core analyst workflow before moving to SQL/warehouse-scale analytics.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    links: [],
  },
]
