using static HelloSalt.Solution;

namespace HelloSalt;

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

  [Fact(DisplayName = "This should fail")]
  public void HelloWord_Returns_GoodbyeWorld()
  {
    // Act
    var result = HelloWord();

    // Assert
    result.Should().Be("Goodbye World");
  }
}
