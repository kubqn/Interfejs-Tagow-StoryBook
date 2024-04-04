import { StoryFn } from '@storybook/react'
import TagList, { ITagList } from '../components/TagList'

export default {
  title: 'TagList',
  component: TagList,
}

const Template: StoryFn<ITagList> = (args) => <TagList {...args} />

export const Loading: StoryFn<ITagList> = Template.bind({})
Loading.args = {
  isLoading: true,
  error: null,
  tags: [],
}

export const WithMultipleTags: StoryFn<ITagList> = Template.bind({})
WithMultipleTags.args = {
  isLoading: false,
  error: null,
  tags: [
    { name: 'Tag1', count: 10, backgroundColor: '#ff0000' },
    { name: 'Tag2', count: 20, backgroundColor: '#00ff00' },
    { name: 'Tag3', count: 30, backgroundColor: '#0000ff' },
  ],
}

export const WithError: StoryFn<ITagList> = Template.bind({})
WithError.args = {
  isLoading: false,
  error: new Error('Catched error'),
  tags: [],
}

export const WithMissingData: StoryFn<ITagList> = Template.bind({})
WithMissingData.args = {
  isLoading: false,
  error: null,
  tags: [],
}
