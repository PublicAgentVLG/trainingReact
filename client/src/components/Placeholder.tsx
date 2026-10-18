interface PlaceholderProps {
  title: string
  description?: string
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p style={{ opacity: 0.7 }}>
        {description ?? 'Эта страница будет реализована на своём этапе.'}
      </p>
    </section>
  )
}