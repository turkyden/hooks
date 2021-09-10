/**
 * title: Basic Usage
 * desc: Try to scroll the box below.
 *
 * title.zh-CN: 滚动至指定距离
 * desc.zh-CN: 尝试点击按钮触发滑动事件，移动端请参考 [smoothscroll-polyfill](https://github.com/iamdustan/smoothscroll) 处理平滑效果。
 */

import React, { useRef } from 'react';
import { Button } from 'antd';
import { useScroll } from 'ahooks';

export default () => {
  const ref = useRef(null);
  const [position, scrollTo] = useScroll(ref);
  const [{ top }, back2top] = useScroll(document);
  return (
    <>
      <div>{JSON.stringify(position)}</div>
      <div
        style={{
          height: '160px',
          width: '160px',
          border: 'solid 1px #000',
          overflow: 'scroll',
          whiteSpace: 'nowrap',
          fontSize: '32px',
          position: 'relative'
        }}
        ref={ref}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur atque, debitis ex
          excepturi explicabo iste iure labore molestiae neque optio perspiciatis
        </div>
        <div>
          Aspernatur cupiditate, deleniti id incidunt mollitia omnis! A aspernatur assumenda
          consequuntur culpa cumque dignissimos enim eos, et fugit natus nemo nesciunt
        </div>
        <div>
          Alias aut deserunt expedita, inventore maiores minima officia porro rem. Accusamus ducimus
          magni modi mollitia nihil nisi provident
        </div>
        <div>
          Alias aut autem consequuntur doloremque esse facilis id molestiae neque officia placeat,
          quia quisquam repellendus reprehenderit.
        </div>
        <div>
          Adipisci blanditiis facere nam perspiciatis sit soluta ullam! Architecto aut blanditiis,
          consectetur corporis cum deserunt distinctio dolore eius est exercitationem
        </div>
        <div>Ab aliquid asperiores assumenda corporis cumque dolorum expedita</div>
        <div>
          Culpa cumque eveniet natus totam! Adipisci, animi at commodi delectus distinctio dolore
          earum, eum expedita facilis
        </div>
        <div>
          Quod sit, temporibus! Amet animi fugit officiis perspiciatis, quis unde. Cumque
          dignissimos distinctio, dolor eaque est fugit nisi non pariatur porro possimus, quas quasi
        </div>
      </div>
      <br/>
      <button onClick={() => scrollTo({ left: 999999 })}>Right</button>&nbsp;
      <button onClick={() => scrollTo({ top: 999999 })}>Bottom</button>&nbsp;
      <button onClick={() => scrollTo({ left: 0 })}>Left</button>&nbsp;
      <button onClick={() => scrollTo({ top: 0 })}>Top</button>
      <Button
        type="primary"
        shape="circle"
        size="large"
        style={{ position: 'fixed', right: '24px', bottom: '24px' }}
        onClick={() => back2top({ top: top > 800 ? 0 : 999999 })}>
        { top > 500 ? <span>&uarr;</span> : <span>&darr;</span> }
      </Button>
    </>
  );
};
