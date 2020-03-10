import Vuetify from 'vuetify'
import Landing from '@/views/landing.vue'
import AnalyzeResults from './mocks/analyze-results.vue'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import sinon from 'sinon'
import newReqModule from '@/store/new-request-module'

describe('landing.vue', () => {
  let stub: any, wrapper: any

  beforeAll( () => {
    stub = sinon.stub(newReqModule.store.state, 'newRequestModule').value({
      ...newReqModule.store.state.newRequestModule,
      displayedComponent: 'Tabs'
    })
  })
  beforeEach(() => {
    let vuetify = new Vuetify()
    wrapper = mount(Landing, {
      vuetify
    })
  })

  it('Landing initially displays only the New Request Tabs component', () => {
    expect(wrapper.contains('#tabs-landing-comp')).toBe(true)
    expect(wrapper.contains('#analyze-pending-container')).toBe(false)
    expect(wrapper.contains('#analyze-results-container')).toBe(false)
  })

  afterAll(() => {
    stub.restore()
  })
})

describe('landing.vue', () => {
  let stub: any, wrapper: any

  beforeAll( () => {
    stub = sinon.stub(newReqModule.store.state, 'newRequestModule').value({
      ...newReqModule.store.state.newRequestModule,
      displayedComponent: 'AnalyzePending'
    })
  })
  beforeEach(() => {
    let vuetify = new Vuetify()
    wrapper = mount(Landing, {
      vuetify
    })
  })

  it('When the state.searchShowStage key is set to "analysing", it shows only the pending container', () => {
    expect(wrapper.contains('#new-req-existing-req-container')).toBe(false)
    expect(wrapper.contains('#analyze-pending-container')).toBe(true)
    expect(wrapper.contains('#analyze-results-container')).toBe(false)
  })

  afterAll(() => {
    stub.restore()
  })
})

describe('landing.vue', () => {
  let stub: any, wrapper: any

  beforeAll( () => {
    stub = sinon.stub(newReqModule.store.state, 'newRequestModule').value({
      ...newReqModule.store.state.newRequestModule,
      displayedComponent: 'AnalyzeResults'
    })
  })
  beforeEach(() => {
    let vuetify = new Vuetify()
    wrapper = mount(Landing, {
      stubs: {
        AnalyzeResults
      },
      vuetify
    })
  })

  it('When the state.displayedComponent key is set to "AnalyzeResults", it shows only the results container', () => {
    expect(wrapper.contains('#new-req-existing-req-container')).toBe(false)
    expect(wrapper.contains('#nanalyze-pending-container')).toBe(false)
    expect(wrapper.contains('#analyze-results-container')).toBe(true)
  })

  afterAll(() => {
    stub.restore()
  })
})
