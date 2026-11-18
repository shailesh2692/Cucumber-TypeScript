// Typescript file for all hooks
import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

// Hooks for each step in the feature file
Before(function () {
  // This hook will run before each scenario
  console.log('Before hook: Executed Before Each Scenario');
});

// Hook to run after each scenario
After(function () {
  // This hook will run after each scenario
  console.log('After hook: Executed After Each Scenario');
});

// Tagged Hooks for scenarios only with @sanity tag
Before('@sanity', function () {
  // This hook will run before each scenario
  console.log('Before hook: Executed Before Each Scenario with @sanity tag');
});

// Tagged Hooks for scenarios only with @sanity tag
After('@sanity', function () {
  // This hook will run after each scenario
  console.log('After hook: Executed After Each Scenario with @sanity tag');
});

// Hook to run once before all scenarios
BeforeAll(function () {
  // This hook will run once before all scenarios
  console.log('BeforeAll hook: Executed Once Before All Scenarios');
});

// Hook to run once after all scenarios
AfterAll(function () {  
  // This hook will run once after all scenarios
  console.log('AfterAll hook: Executed Once After All Scenarios');
});
