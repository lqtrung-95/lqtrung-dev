export function PostMeta({ date, readingTime }: { date: string; readingTime?: string }) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <div className="flex items-center gap-2 text-sm text-(--fg-subtle)">
      <time dateTime={date}>{formatted}</time>
      {readingTime && (
        <>
          <span aria-hidden>&middot;</span>
          <span>{readingTime}</span>
        </>
      )}
    </div>
  )
}
