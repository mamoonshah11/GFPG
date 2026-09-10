function Card({ title, children }) {
  return (
    <div className="rounded-lg border border-gray-300 p-6 shadow-sm">
      {title && <h2 className="mb-2 text-lg font-semibold">{title}</h2>}
      <div>{children}</div>
    </div>
  )
}

export default Card
