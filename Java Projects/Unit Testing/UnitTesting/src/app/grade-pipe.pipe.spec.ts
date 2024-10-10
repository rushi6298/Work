import { Pipe } from '@angular/core';
import { GradePipePipe } from './grade-pipe.pipe';

describe('GradePipePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should Assign A grade when marks is greater than 89 ', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(93.87)
    expect(grade).toBe('A')
  })

  it('Should Assign B grade when marks is greater than 79 ', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(82)
    expect(grade).toBe('B')
  })

  it('Should Assign C grade when marks is greater than 69 ', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(72)
    expect(grade).toBe('C')
  })

  it('Should Assign D grade when marks is greater than 59', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(67)
    expect(grade).toBe('D')
  })

  it('Should Assign E grade when marks is greater than 35 ', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(50)
    expect(grade).toBe('E')
  })

  it('Should Assign FAIL grade when marks is less than 35 ', () => {
    const pipe = new GradePipePipe();
    let grade = pipe.transform(29)
    expect(grade).toBe('FAIL')
  })
});
