import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  goerli,
  sepolia,
  bsc,
  bscTestnet,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const projectId = "0a125e3a4251eb58c540988c282cdb2d";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet,
        walletConnectWallet,
        coinbaseWallet,
        rainbowWallet,
      ],
    },
    {
      groupName: "Others",
      wallets: [
        trustWallet,
        ledgerWallet,
        argentWallet,
        omniWallet,
        imTokenWallet,
      ],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: projectId,
  }
);

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: projectId,
  chains: [
    sepolia,
    bscTestnet,
    // mainnet,
    // polygon,
    // optimism,
    // arbitrum,
    // base,
    // goerli,
    // sepolia,
    // bsc,
    // bscTestnet,
  ],
  connectors,
});

const queryClient = new QueryClient();

const Rainbowkit = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={sepolia}
          modalSize="compact" //wide,compact
          theme={darkTheme({
            accentColor: "rgba(255, 255, 255, 0.2)",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Rainbowkit;
