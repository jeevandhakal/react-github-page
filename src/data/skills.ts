import type { Skill } from '../types'

export const skills: Skill[] = [
  {
    category: 'Data Engineering & Pipelines',
    items: ['Python', 'SQL', 'PySpark', 'Apache Hive', 'ETL Pipelines', 'Data Modeling'],
  },
  {
    category: 'Data Analysis & Visualization',
    items: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Machine Learning & Statistics',
    items: ['Scikit-learn', 'Facebook Prophet', 'LSTM', 'K-Means', 'Random Forest', 'Statistical Analysis'],
  },
  {
    category: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (S3, SES)', 'Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Linux'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Django', 'REST APIs', 'GraphQL'],
  },
]