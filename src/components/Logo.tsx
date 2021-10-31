import "./Logo.css";
import controllerLogo2020 from "../logos/2020_controller_white.svg";
import wingsLogo2021 from "../logos/2021_wings_white.svg";
import diceLogo2021 from "../logos/2021_dice_white.svg";
import { ILogoChoice } from "../models/ILogoChoice";

export interface ILogoProps {
  choice?: ILogoChoice;
}

const chooseLogo = (choice?: ILogoChoice): [string, string] => {
  switch (choice) {
    case ILogoChoice.Controller2020:
      return [controllerLogo2020, "logo-2020"];
    case ILogoChoice.Dice2021:
      return [diceLogo2021, "logo-dice-2021"];
    case ILogoChoice.Wings2021:
    default:
      return [wingsLogo2021, "logo-wings-2021"];
  }
};

const Logo: React.FC<ILogoProps> = (props) => {
  const { choice } = props;

  const [logo, className] = chooseLogo(choice);

  return (
    <div className={"logo " + className} data-testid="logo">
      <img src={logo} alt="Extra Life" />
    </div>
  );
};

export default Logo;
