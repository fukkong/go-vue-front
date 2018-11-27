import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SideBar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(SideBar, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
