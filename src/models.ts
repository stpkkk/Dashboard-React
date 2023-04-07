export interface IChart {
  id: string
  name: string
  type: string
  data: number[][]
  color: string
}

export interface ISidebar {
  title: string
  path: string
  icon: React.ReactElement
  clName: string
}

export interface ISelectModal {
  value: string
  label: string
}
