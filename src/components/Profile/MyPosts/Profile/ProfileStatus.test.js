import React from "react";
import {create} from 'react-test-renderer'
import {ProfileStatus} from "./ProfileStatus";

descride('ProfileStatus Component', () => {
    test('status from props shought to be in the state', () => {
        const component = create(<ProfileStatus status='hello'/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe('hello')
    })
    test('after creation span shought be displate with status', () => {
        const component = create(<ProfileStatus status='hello'/>)
        const root = component.root();
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation span shought be displate with status', () => {
        const component = create(<ProfileStatus status='hello'/>)
        const root = component.root();
        const span = root.findByType('span')
        expect(span.children[0]).toBe('hello')
    })
    test('after creation input shought be displate', () => {
        const component = create(<ProfileStatus status='hello'/>)
        const root = component.root();
        const input = root.findByType('input')
        expect(input).toBeNull()
    })
    test('input shought displate in editmode instead of span', () => {
        const component = create(<ProfileStatus status='hello'/>)
        const root = component.root();
        const span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value()).toBe('hello')
    })
})