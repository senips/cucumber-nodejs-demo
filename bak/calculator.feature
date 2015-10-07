Feature:  calculator application supports arithmetic operations

Scenario:  adding two decimal numbers
  Given open calculator application and reset to new operation
  When I do add operation with the values 10 and 20
  Then I expect the result should be "30"

  Scenario:  adding two decimal numbers
    Given open calculator application and reset to new operation
    When I do add operation with the values "23" and "77"
    Then I expect the result should be "100"


  Scenario Outline:  subtracting two decimal numbers
    Given open calculator application and reset to new operation
    When I do subtract operation with the values <a> and <b>
    Then so the result should be <c>

    Examples:
        |   a   |  b  |  c   |
        |   10  | 10  | 0   |
        |   20  | 10  | 10   |
        |   10  | 20  | -10   |
