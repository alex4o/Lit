function getMorseCode(str) {
  let morse="";

  for (let ch of str)
  {
    if (ch == 'a' || ch == 'A')
    {
      morse += ".- ";
    }
    else if (ch == 'b' || ch == 'B')
    {
      morse += "-... ";
    }
    else if (ch == 'c' || ch == 'C')
    {
      morse += "-.-. ";
    }
    else if (ch == 'd' || ch == 'D')
    {
      morse += "-.. ";
    }
    else if (ch == 'e' || ch == 'E')
    {
      morse += ". ";
    }
    else if (ch == 'f' || ch == 'F')
    {
      morse += "..-. ";
    }
    else if (ch == 'g' || ch == 'G')
    {
      morse += "--. ";
    }
    else if (ch == 'h' || ch == 'H')
    {
      morse += ".... ";
    }
    else if (ch == 'i' || ch == 'I')
    {
      morse += ".. ";
    }
    else if (ch == 'j' || ch == 'J')
    {
      morse += ".--- ";
    }
    else if (ch == 'k' || ch == 'K')
    {
      morse += "-.- ";
    }
    else if (ch == 'l' || ch == 'L')
    {
      morse += ".-.. ";
    }
    else if (ch == 'm' || ch == 'M')
    {
      morse += "-- ";
    }
    else if (ch == 'n' || ch == 'N')
    {
      morse += "-. ";
    }
    else if (ch == 'o' || ch == 'O')
    {
      morse += "--- ";
    }
    else if (ch == 'p' || ch == 'P')
    {
      morse += ".--. ";
    }
    else if (ch == 'Q' || ch == 'q')
    {
      morse += "--.- ";
    }
    else if (ch == 'r' || ch == 'R')
    {
      morse += ".-. ";
    }
    else if (ch == 's' || ch == 'S')
    {
      morse += "... ";
    }
    else if (ch == 'T' || ch == 't')
    {
      morse += "- ";
    }
    else if (ch == 'u' || ch == 'U')
    {
      morse += "..- ";
    }
    else if (ch == 'V' || ch == 'v')
    {
      morse += "...- ";
    }
    else if (ch == 'w' || ch == 'W')
    {
      morse += ".-- ";
    }
    else if (ch == 'x' || ch == 'X')
    {
      morse += "-..- ";
    }
    else if (ch == 'y' || ch == 'Y')
    {
      morse += "-.-- ";
    }
    else if (ch == 'z' || ch == 'Z')
    {
      morse += "--.. ";
    }
    else if (ch == ' ')
    {
      morse += "/";
    }
    else
    {
      return "";
    }
  }
  return morse;
}
