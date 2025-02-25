export default async function* jsonReporter(source) {

  const tests = [];

  for await (const event of source) {
    if (event.type !== 'test:complete' || event.data.type == 'suite' || !event.data.nesting) {
      continue;
    }

    tests.push({
      test: event.data.name,
      result: event.data.details.passed ? 'passed' : 'failed',
    });
  }

  yield JSON.stringify(tests);
}
