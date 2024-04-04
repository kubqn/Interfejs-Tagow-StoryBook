import { StoryFn } from '@storybook/react'
import Tag, { ITag } from '../components/Tag'

interface ITemplate {
  numberOfChildren: number
  wrap: boolean
  gap: string
  tag: ITag
  backgroundColor: string
}

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
    numberOfChildren: {
      control: {
        type: 'number',
        min: 0,
      },
      defaultValue: 5,
    },
    wrap: { control: 'boolean', defaultValue: true },
    gap: { control: 'text', defaultValue: '0.5rem' },
    tag: { control: null },
  },
}

const Template: StoryFn<ITemplate> = ({
  numberOfChildren,
  wrap,
  gap,
  tag,
  backgroundColor,
}) => {
  if (numberOfChildren === 1) {
    return <Tag {...tag} backgroundColor={backgroundColor} />
  } else {
    const tags = Array.from({ length: numberOfChildren }, (_, index) => ({
      name: `Tag ${index + 1}`,
      count: (index + 1) * 4,
    }))

    const listStyle: React.CSSProperties = {
      display: 'flex',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      gap,
    }

    return (
      <div style={listStyle}>
        {tags.map((tag, index) => (
          <Tag key={index} {...tag} backgroundColor={backgroundColor} />
        ))}
      </div>
    )
  }
}

export const SingleTag = Template.bind({})
SingleTag.args = {
  tag: {
    name: 'Example Tag',
    count: 5,
  },
  numberOfChildren: 1,
}

export const MultipleTags = Template.bind({})
MultipleTags.args = {
  numberOfChildren: 5,
  gap: '0.3rem',
  wrap: true,
}

export const NoWrap = Template.bind({})
NoWrap.args = {
  numberOfChildren: 80,
  wrap: false,
}

export const CustomGap = Template.bind({})
CustomGap.args = {
  numberOfChildren: 5,
  gap: '5rem',
  wrap: true,
}
