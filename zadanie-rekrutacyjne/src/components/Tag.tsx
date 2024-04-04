export interface ITag {
  name: string
  count: number
  backgroundColor?: string
}

const Tag: React.FC<ITag> = ({ name, count, backgroundColor }) => {
  const tagStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || '#0000ff',
    padding: '0.5rem',
    listStyle: 'none',
    borderRadius: '10px',
    color: 'white',
    textShadow: '-0.5px 0 black, 0 0.5px black, 0.5px 0 black, 0 -0.5px black',
  }

  return (
    <li style={tagStyle}>
      {name} - {count}
    </li>
  )
}

export default Tag
