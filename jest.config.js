module.exports = {
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/test/assets/'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'tests/results',
        outputName: 'report.xml',
      },
    ],
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: 'tests/results/report.html',
      },
    ],
  ],
  coverageReporters: ['lcovonly', 'html', 'text'],
  coverageDirectory: 'tests/coverage',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
