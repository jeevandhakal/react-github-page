import type { ProjectCategory } from '../types/project'

export type ProjectFilterValue = 'all' | ProjectCategory

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'data-engineering': 'Data Engineering',
  analytics: 'Analytics',
  backend: 'Backend',
  ml: 'ML',
}

const CATEGORY_ORDER: ProjectCategory[] = ['data-engineering', 'analytics', 'backend', 'ml']

export const PROJECT_FILTER_OPTIONS: { value: ProjectFilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  ...CATEGORY_ORDER.map((value) => ({
    value,
    label: PROJECT_CATEGORY_LABELS[value],
  })),
]
