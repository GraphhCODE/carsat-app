export function Table({ children }) {
  return <table className="min-w-full border border-gray-300">{children}</table>;
}

export function TableHeader({ children }) {
  return <thead className="bg-gray-200">{children}</thead>;
}

export function TableRow({ children }) {
  return <tr className="border border-gray-300">{children}</tr>;
}

export function TableHead({ children }) {
  return <th className="border border-gray-300 px-4 py-2">{children}</th>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children }) {
  return <td className="border border-gray-300 px-4 py-2">{children}</td>;
}
