/**
 * 번역
 * Debounce는 함수가 호출되는 속도를 제한하는 방법입니다. 추가적인 함수 호출 없이
 * 일정 시간이 지날 때 까지 함수 실행을 지연시키는 방식으로 작동합니다.
 * 이 시간 내에 다른 함수 호출이 발생하면 타이머를 초기화하고 함수 실행을 다시 지연시킵니다.
 * 
 * 다음과 같은 상황에서 유용합니다.
 * 1. 키 입력, 마우스 이동
 * 2. 비용이 많이 드는 계산이나 네트워크 요청에서 모두 수행할 필요가 없는 경우
 */

type F18 = (...args: number[]) => void

function debounce(fn: F18, t: number): F18 {
    
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: number[]) => {

        if ( timeout ) clearTimeout(timeout);

        timeout = setTimeout(fn, t, ...args);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */