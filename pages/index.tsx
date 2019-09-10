import Link from 'next/link'

const navigation = [
  {
    link: '/shows',
    label: 'Show Request example',
  },
]

export default () => {
  return (
    <>
      <h1>Navigate</h1>
      <ul>
        {navigation.map(({ link, label }) => (
          <li key={link.substring(1)}>
            <Link href={link}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
