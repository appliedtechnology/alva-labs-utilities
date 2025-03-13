using static SaltCodeTest.Solution;

namespace SaltCodeTest;

public class Tests
{
  [Fact(DisplayName = "This should Pass")]
  public void HelloWord_Returns_HelloWorld()
  {
    // Act
    var result = HelloWord();

    // Assert
    result.Should().Be("Hello World");
  }
}
