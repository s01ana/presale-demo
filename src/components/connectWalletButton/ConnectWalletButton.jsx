import { useEffect, useState } from "react";
import ConnectWalletButtonStyleWrapper from "./ConnectWalletButton.style";
import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { FiChevronDown } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import IconImg1 from "../../assets/images/icons/wallet.svg";

const ConnectWalletButton = ({ variant }) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal, chainModalOpen } = useChainModal();

  const [walletAddress, setWalletAddress] = useState("");
  const [shortWalletAddress, setShortWalletAddress] = useState("");

  const { address: addressData, isConnected, chain } = useAccount();

  useEffect(() => {
    if (isConnected) {
      let first = addressData.slice(0, 4);
      let last = addressData.slice(-4);
      setWalletAddress(first + "..." + last);

      let first2 = addressData.slice(0, 2);
      let last2 = addressData.slice(-2);
      setShortWalletAddress(first2 + "..." + last2);
    }

     if (isConnected && !chain && !chainModalOpen) {
      openChainModal();
    }
  }, [isConnected, addressData, chain, chainModalOpen]);

  return (
    <ConnectWalletButtonStyleWrapper variant={variant}>
      {openConnectModal && (
        <button className="connect-wallet-btn" onClick={openConnectModal}>
          Connect <span>Wallet</span>
        </button>
      )}

      {openAccountModal && (
        <button
          className="connect-wallet-btn"
          onClick={openAccountModal}
        >
          <span>{walletAddress}</span>
          <span className="short-address">{shortWalletAddress}</span>
          <FiChevronDown />
        </button>
      )}
    </ConnectWalletButtonStyleWrapper>
  );
};

export default ConnectWalletButton;
