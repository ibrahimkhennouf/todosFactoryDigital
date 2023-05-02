export interface ITodoTableProps {
  todos: any[];
}

export interface ITodo {
  todo: any;
  edit?: any;
  deleteP?: any;
  urlP?: string;
}

declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
