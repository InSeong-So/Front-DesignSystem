import { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react';
/**
 * 설명
 * @requires DependencyList,EffectCallback,useEffect,useLayoutEffect
 * @param {effect} EffectCallback 실행될 effect
 * @param {deps} DependencyList useEffect에서 dependency를 설정해서 값이 바뀔때 실행되도록 한다.
 * @description 서버사이드 렌더링이 필요할 경우에는 useLayoutEffect 실행 그렇지 않을 경우 useEffect 실행 참고:https://bit.ly/3poktC9
 * @returns {function} useSelector(selector,shallowEqual)
 */
const useIsomorphicLayoutEffect: (effect: EffectCallback, deps?: DependencyList) => void =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export default useIsomorphicLayoutEffect;
