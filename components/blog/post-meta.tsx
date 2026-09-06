export function PostMeta({ date, readingTime }: { date: string; readingTime?: string }) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <div className="label-mono-sm flex items-center gap-2 text-(--fg-subtle) uppercase">
      <time dateTime={date}>{formatted}</time>
      {readingTime && (
        <>
          <span aria-hidden>{'//'}</span>
          <span>{readingTime}</span>
        </>
      )}
    </div>
  )
}
