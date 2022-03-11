import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

/**
 * 설명
 * @requires useIsomorphicLayoutEffect
 * @param {*} componentDidMount  useEffect안에서 실행될 함수
 * @description 처음 mount 될때만 실행되는 effect
 */
const useComponentDidMount = (componentDidMount: (() => void) | (() => Promise<void>)) => {
  useIsomorphicLayoutEffect(() => {
    const a = componentDidMount();
    Promise.resolve(a).catch(e => {
      console.error(e);
    });
  }, []);
};

export default useComponentDidMount;
