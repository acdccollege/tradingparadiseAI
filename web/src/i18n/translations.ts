export type Language = 'en' | 'zh'

export const translations = {
  en: {
    // Header
    appTitle: 'TradingParadise',
    subtitle: 'Multi-AI Model Trading Platform',
    aiTraders: 'AI Traders',
    details: 'Details',
    tradingPanel: 'Trading Panel',
    competition: 'Competition',
    backtest: 'Backtest',
    running: 'RUNNING',
    stopped: 'STOPPED',
    adminMode: 'Admin Mode',
    logout: 'Logout',
    switchTrader: 'Switch Trader:',
    view: 'View',

    // Navigation
    realtimeNav: 'Leaderboard',
    configNav: 'Config',
    dashboardNav: 'Dashboard',
    strategyNav: 'Strategy',
    debateNav: 'Arena',
    faqNav: 'FAQ',

    // Footer
    footerTitle: 'TradingParadise - AI Trading System',
    footerWarning: '⚠️ Trading involves risk. Use at your own discretion.',

    // Stats Cards
    totalEquity: 'Total Equity',
    availableBalance: 'Available Balance',
    totalPnL: 'Total P&L',
    positions: 'Positions',
    margin: 'Margin',
    free: 'Free',

    // Positions Table
    currentPositions: 'Current Positions',
    active: 'Active',
    symbol: 'Symbol',
    side: 'Side',
    entryPrice: 'Entry Price',
    stopLoss: 'Stop Loss',
    takeProfit: 'Take Profit',
    riskReward: 'Risk/Reward',
    markPrice: 'Mark Price',
    quantity: 'Quantity',
    positionValue: 'Position Value',
    leverage: 'Leverage',
    unrealizedPnL: 'Unrealized P&L',
    liqPrice: 'Liq. Price',
    long: 'LONG',
    short: 'SHORT',
    noPositions: 'No Positions',
    noActivePositions: 'No active trading positions',

    // Recent Decisions
    recentDecisions: 'Recent Decisions',
    lastCycles: 'Last {count} trading cycles',
    noDecisionsYet: 'No Decisions Yet',
    aiDecisionsWillAppear: 'AI trading decisions will appear here',
    cycle: 'Cycle',
    success: 'Success',
    failed: 'Failed',
    inputPrompt: 'Input Prompt',
    aiThinking: 'AI Chain of Thought',
    collapse: 'Collapse',
    expand: 'Expand',

    // Equity Chart
    accountEquityCurve: 'Account Equity Curve',
    noHistoricalData: 'No Historical Data',
    dataWillAppear: 'Equity curve will appear after running a few cycles',
    initialBalance: 'Initial Balance',
    currentEquity: 'Current Equity',
    historicalCycles: 'Historical Cycles',
    displayRange: 'Display Range',
    recent: 'Recent',
    allData: 'All Data',
    cycles: 'Cycles',

    // Comparison Chart
    comparisonMode: 'Comparison Mode',
    dataPoints: 'Data Points',
    currentGap: 'Current Gap',
    count: '{count} pts',

    // TradingView Chart
    marketChart: 'Market Chart',
    viewChart: 'Click to view chart',
    enterSymbol: 'Enter symbol...',
    popularSymbols: 'Popular Symbols',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',

    // Backtest Page
    backtestPage: {
      title: 'Backtest Lab',
      subtitle:
        'Pick a model + time range to replay the full AI decision loop.',
      start: 'Start Backtest',
      starting: 'Starting...',
      quickRanges: {
        h24: '24h',
        d3: '3d',
        d7: '7d',
      },
      actions: {
        pause: 'Pause',
        resume: 'Resume',
        stop: 'Stop',
      },
      states: {
        running: 'Running',
        paused: 'Paused',
        completed: 'Completed',
        failed: 'Failed',
        liquidated: 'Liquidated',
      },
      form: {
        aiModelLabel: 'AI Model',
        selectAiModel: 'Select AI model',
        providerLabel: 'Provider',
        statusLabel: 'Status',
        enabled: 'Enabled',
        disabled: 'Disabled',
        noModelWarning:
          'Please add and enable an AI model on the Model Config page first.',
        runIdLabel: 'Run ID',
        runIdPlaceholder: 'Leave blank to auto-generate',
        decisionTfLabel: 'Decision TF',
        cadenceLabel: 'Decision cadence (bars)',
        timeRangeLabel: 'Time range',
        symbolsLabel: 'Symbols (comma-separated)',
        customTfPlaceholder: 'Custom TFs (comma separated, e.g. 2h,6h)',
        initialBalanceLabel: 'Initial balance (USDT)',
        feeLabel: 'Fee (bps)',
        slippageLabel: 'Slippage (bps)',
        btcEthLeverageLabel: 'BTC/ETH leverage (x)',
        altcoinLeverageLabel: 'Altcoin leverage (x)',
        fillPolicies: {
          nextOpen: 'Next open',
          barVwap: 'Bar VWAP',
          midPrice: 'Mid price',
        },
        promptPresets: {
          baseline: 'Baseline',
          aggressive: 'Aggressive',
          conservative: 'Conservative',
          scalping: 'Scalping',
        },
        cacheAiLabel: 'Reuse AI cache',
        replayOnlyLabel: 'Replay only',
        overridePromptLabel: 'Use only custom prompt',
        customPromptLabel: 'Custom prompt (optional)',
        customPromptPlaceholder:
          'Append or fully customize the strategy prompt',
      },
      runList: {
        title: 'Runs',
        count: 'Total {count} records',
      },
      filters: {
        allStates: 'All states',
        searchPlaceholder: 'Run ID / label',
      },
      tableHeaders: {
        runId: 'Run ID',
        label: 'Label',
        state: 'State',
        progress: 'Progress',
        equity: 'Equity',
        lastError: 'Last Error',
        updated: 'Updated',
      },
      emptyStates: {
        noRuns: 'No runs yet',
        selectRun: 'Select a run to view details',
      },
      detail: {
        tfAndSymbols: 'TF: {tf} · Symbols {count}',
        labelPlaceholder: 'Label note',
        saveLabel: 'Save',
        deleteLabel: 'Delete',
        exportLabel: 'Export',
        errorLabel: 'Error',
      },
      toasts: {
        selectModel: 'Please select an AI model first.',
        modelDisabled: 'AI model {name} is disabled.',
        invalidRange: 'End time must be later than start time.',
        startSuccess: 'Backtest {id} started.',
        startFailed: 'Failed to start. Please try again later.',
        actionSuccess: '{action} {id} succeeded.',
        actionFailed: 'Operation failed. Please try again later.',
        labelSaved: 'Label updated.',
        labelFailed: 'Failed to update label.',
        confirmDelete: 'Delete backtest {id}? This action cannot be undone.',
        deleteSuccess: 'Backtest record deleted.',
        deleteFailed: 'Failed to delete. Please try again later.',
        traceFailed: 'Failed to fetch AI trace.',
        exportSuccess: 'Exported data for {id}.',
        exportFailed: 'Failed to export.',
      },
      aiTrace: {
        title: 'AI Trace',
        clear: 'Clear',
        cyclePlaceholder: 'Cycle',
        fetch: 'Fetch',
        prompt: 'Prompt',
        cot: 'Chain of thought',
        output: 'Output',
        cycleTag: 'Cycle #{cycle}',
      },
      decisionTrail: {
        title: 'AI Decision Trail',
        subtitle: 'Showing last {count} cycles',
        empty: 'No records yet',
        emptyHint:
          'The AI thought & execution log will appear once the run starts.',
      },
      charts: {
        equityTitle: 'Equity Curve',
        equityEmpty: 'No data yet',
      },
      metrics: {
        title: 'Metrics',
        totalReturn: 'Total Return %',
        maxDrawdown: 'Max Drawdown %',
        sharpe: 'Sharpe',
        profitFactor: 'Profit Factor',
        pending: 'Calculating...',
        realized: 'Realized PnL',
        unrealized: 'Unrealized PnL',
      },
      trades: {
        title: 'Trade Events',
        headers: {
          time: 'Time',
          symbol: 'Symbol',
          action: 'Action',
          qty: 'Qty',
          leverage: 'Leverage',
          pnl: 'PnL',
        },
        empty: 'No trades yet',
      },
      metadata: {
        title: 'Metadata',
        created: 'Created',
        updated: 'Updated',
        processedBars: 'Processed Bars',
        maxDrawdown: 'Max DD',
        liquidated: 'Liquidated',
        yes: 'Yes',
        no: 'No',
      },
    },

    // Competition Page
    aiCompetition: 'AI Competition',
    traders: 'traders',
    liveBattle: 'Live Battle',
    realTimeBattle: 'Real-time Battle',
    leader: 'Leader',
    leaderboard: 'Leaderboard',
    live: 'LIVE',
    realTime: 'LIVE',
    performanceComparison: 'Performance Comparison',
    realTimePnL: 'Real-time PnL %',
    realTimePnLPercent: 'Real-time PnL %',
    headToHead: 'Head-to-Head Battle',
    leadingBy: 'Leading by {gap}%',
    behindBy: 'Behind by {gap}%',
    equity: 'Equity',
    pnl: 'P&L',
    pos: 'Pos',

    // AI Traders Management
    manageAITraders: 'Manage your AI trading bots',
    aiModels: 'AI Models',
    exchanges: 'Exchanges',
    createTrader: 'Create Trader',
    modelConfiguration: 'Model Configuration',
    configured: 'Configured',
    notConfigured: 'Not Configured',
    currentTraders: 'Current Traders',
    noTraders: 'No AI Traders',
    createFirstTrader: 'Create your first AI trader to get started',
    dashboardEmptyTitle: "Let's Get Started!",
    dashboardEmptyDescription:
      'Create your first AI trader to automate your trading strategy. Connect an exchange, choose an AI model, and start trading in minutes!',
    goToTradersPage: 'Create Your First Trader',
    configureModelsFirst: 'Please configure AI models first',
    configureExchangesFirst: 'Please configure exchanges first',
    configureModelsAndExchangesFirst:
      'Please configure AI models and exchanges first',
    modelNotConfigured: 'Selected model is not configured',
    exchangeNotConfigured: 'Selected exchange is not configured',
    confirmDeleteTrader: 'Are you sure you want to delete this trader?',
    status: 'Status',
    start: 'Start',
    stop: 'Stop',
    createNewTrader: 'Create New AI Trader',
    selectAIModel: 'Select AI Model',
    selectExchange: 'Select Exchange',
    traderName: 'Trader Name',
    enterTraderName: 'Enter trader name',
    cancel: 'Cancel',
    create: 'Create',
    configureAIModels: 'Configure AI Models',
    configureExchanges: 'Configure Exchanges',
    aiScanInterval: 'AI Scan Decision Interval (minutes)',
    scanIntervalRecommend: 'Recommended: 3-10 minutes',
    useTestnet: 'Use Testnet',
    enabled: 'Enabled',
    save: 'Save',

    // AI Model Configuration
    officialAPI: 'Official API',
    customAPI: 'Custom API',
    apiKey: 'API Key',
    customAPIURL: 'Custom API URL',
    enterAPIKey: 'Enter API Key',
    enterCustomAPIURL: 'Enter custom API endpoint URL',
    useOfficialAPI: 'Use official API service',
    useCustomAPI: 'Use custom API endpoint',

    // Exchange Configuration
    secretKey: 'Secret Key',
    privateKey: 'Private Key',
    walletAddress: 'Wallet Address',
    user: 'User',
    signer: 'Signer',
    passphrase: 'Passphrase',
    enterPrivateKey: 'Enter Private Key',
    enterWalletAddress: 'Enter Wallet Address',
    enterUser: 'Enter User',
    enterSigner: 'Enter Signer Address',
    enterSecretKey: 'Enter Secret Key',
    enterPassphrase: 'Enter Passphrase',
    hyperliquidPrivateKeyDesc:
      'Hyperliquid uses private key for trading authentication',
    hyperliquidWalletAddressDesc:
      'Wallet address corresponding to the private key',
    // Hyperliquid Agent Wallet (New Security Model)
    hyperliquidAgentWalletTitle: 'Hyperliquid Agent Wallet Configuration',
    hyperliquidAgentWalletDesc:
      'Use Agent Wallet for secure trading: Agent wallet signs transactions (balance ~0), Main wallet holds funds (never expose private key)',
    hyperliquidAgentPrivateKey: 'Agent Private Key',
    enterHyperliquidAgentPrivateKey: 'Enter Agent wallet private key',
    hyperliquidAgentPrivateKeyDesc:
      'Agent wallet private key for signing transactions (keep balance near 0 for security)',
    hyperliquidMainWalletAddress: 'Main Wallet Address',
    enterHyperliquidMainWalletAddress: 'Enter Main wallet address',
    hyperliquidMainWalletAddressDesc:
      'Main wallet address that holds your trading funds (never expose its private key)',
    // Aster API Pro Configuration
    asterApiProTitle: 'Aster API Pro Wallet Configuration',
    asterApiProDesc:
      'Use API Pro wallet for secure trading: API wallet signs transactions, main wallet holds funds (never expose main wallet private key)',
    asterUserDesc:
      'Main wallet address - The EVM wallet address you use to log in to Aster (Note: Only EVM wallets are supported)',
    asterSignerDesc:
      'API Pro wallet address (0x...) - Generate from https://www.asterdex.com/en/api-wallet',
    asterPrivateKeyDesc:
      'API Pro wallet private key - Get from https://www.asterdex.com/en/api-wallet (only used locally for signing, never transmitted)',
    asterUsdtWarning:
      'Important: Aster only tracks USDT balance. Please ensure you use USDT as margin currency to avoid P&L calculation errors caused by price fluctuations of other assets (BNB, ETH, etc.)',
    asterUserLabel: 'Main Wallet Address',
    asterSignerLabel: 'API Pro Wallet Address',
    asterPrivateKeyLabel: 'API Pro Wallet Private Key',
    enterAsterUser: 'Enter main wallet address (0x...)',
    enterAsterSigner: 'Enter API Pro wallet address (0x...)',
    enterAsterPrivateKey: 'Enter API Pro wallet private key',

    // LIGHTER Configuration
    lighterWalletAddress: 'L1 Wallet Address',
    lighterPrivateKey: 'L1 Private Key',
    lighterApiKeyPrivateKey: 'API Key Private Key',
    enterLighterWalletAddress: 'Enter Ethereum wallet address (0x...)',
    enterLighterPrivateKey: 'Enter L1 private key (32 bytes)',
    enterLighterApiKeyPrivateKey:
      'Enter API Key private key (40 bytes, optional)',
    lighterWalletAddressDesc:
      'Your Ethereum wallet address for account identification',
    lighterPrivateKeyDesc:
      'L1 private key for account identification (32-byte ECDSA key)',
    lighterApiKeyPrivateKeyDesc:
      'API Key private key for transaction signing (40-byte Poseidon2 key)',
    lighterApiKeyOptionalNote:
      'Without API Key, system will use limited V1 mode',
    lighterV1Description:
      'Basic Mode - Limited functionality, testing framework only',
    lighterV2Description:
      'Full Mode - Supports Poseidon2 signing and real trading',
    lighterPrivateKeyImported: 'LIGHTER private key imported',

    // Exchange names
    hyperliquidExchangeName: 'Hyperliquid',
    asterExchangeName: 'Aster DEX',

    // Secure input
    secureInputButton: 'Secure Input',
    secureInputReenter: 'Re-enter Securely',
    secureInputClear: 'Clear',
    secureInputHint:
      'Captured via secure two-step input. Use "Re-enter Securely" to update this value.',

    // Two Stage Key Modal
    twoStageModalTitle: 'Secure Key Input',
    twoStageModalDescription:
      'Use a two-step flow to enter your {length}-character private key safely.',
    twoStageStage1Title: 'Step 1 · Enter the first half',
    twoStageStage1Placeholder: 'First 32 characters (include 0x if present)',
    twoStageStage1Hint:
      'Continuing copies an obfuscation string to your clipboard as a diversion.',
    twoStageStage1Error: 'Please enter the first part before continuing.',
    twoStageNext: 'Next',
    twoStageProcessing: 'Processing…',
    twoStageCancel: 'Cancel',
    twoStageStage2Title: 'Step 2 · Enter the rest',
    twoStageStage2Placeholder: 'Remaining characters of your private key',
    twoStageStage2Hint:
      'Paste the obfuscation string somewhere neutral, then finish entering your key.',
    twoStageClipboardSuccess:
      'Obfuscation string copied. Paste it into any text field once before completing.',
    twoStageClipboardReminder:
      'Remember to paste the obfuscation string before submitting to avoid clipboard leaks.',
    twoStageClipboardManual:
      'Automatic copy failed. Copy the obfuscation string below manually.',
    twoStageBack: 'Back',
    twoStageSubmit: 'Confirm',
    twoStageInvalidFormat:
      'Invalid private key format. Expected {length} hexadecimal characters (optional 0x prefix).',
    testnetDescription:
      'Enable to connect to exchange test environment for simulated trading',
    securityWarning: 'Security Warning',
    saveConfiguration: 'Save Configuration',

    // Trader Configuration
    positionMode: 'Position Mode',
    crossMarginMode: 'Cross Margin',
    isolatedMarginMode: 'Isolated Margin',
    crossMarginDescription:
      'Cross margin: All positions share account balance as collateral',
    isolatedMarginDescription:
      'Isolated margin: Each position manages collateral independently, risk isolation',
    leverageConfiguration: 'Leverage Configuration',
    btcEthLeverage: 'BTC/ETH Leverage',
    altcoinLeverage: 'Altcoin Leverage',
    leverageRecommendation:
      'Recommended: BTC/ETH 5-10x, Altcoins 3-5x for risk control',
    tradingSymbols: 'Trading Symbols',
    tradingSymbolsPlaceholder:
      'Enter symbols, comma separated (e.g., BTCUSDT,ETHUSDT,SOLUSDT)',
    selectSymbols: 'Select Symbols',
    selectTradingSymbols: 'Select Trading Symbols',
    selectedSymbolsCount: 'Selected {count} symbols',
    clearSelection: 'Clear All',
    confirmSelection: 'Confirm',
    tradingSymbolsDescription:
      'Empty = use default symbols. Must end with USDT (e.g., BTCUSDT, ETHUSDT)',
    btcEthLeverageValidation: 'BTC/ETH leverage must be between 1-50x',
    altcoinLeverageValidation: 'Altcoin leverage must be between 1-20x',
    invalidSymbolFormat: 'Invalid symbol format: {symbol}, must end with USDT',

    // System Prompt Templates
    systemPromptTemplate: 'System Prompt Template',
    promptTemplateDefault: 'Default Stable',
    promptTemplateAdaptive: 'Conservative Strategy',
    promptTemplateAdaptiveRelaxed: 'Aggressive Strategy',
    promptTemplateHansen: 'Hansen Strategy',
    promptTemplateNof1: 'NoF1 English Framework',
    promptTemplateTaroLong: 'Taro Long Position',
    promptDescDefault: '📊 Default Stable Strategy',
    promptDescDefaultContent:
      'Maximize Sharpe ratio, balanced risk-reward, suitable for beginners and stable long-term trading',
    promptDescAdaptive: '🛡️ Conservative Strategy (v6.0.0)',
    promptDescAdaptiveContent:
      'Strict risk control, BTC mandatory confirmation, high win rate priority, suitable for conservative traders',
    promptDescAdaptiveRelaxed: '⚡ Aggressive Strategy (v6.0.0)',
    promptDescAdaptiveRelaxedContent:
      'High-frequency trading, BTC optional confirmation, pursue trading opportunities, suitable for volatile markets',
    promptDescHansen: '🎯 Hansen Strategy',
    promptDescHansenContent:
      'Hansen custom strategy, maximize Sharpe ratio, for professional traders',
    promptDescNof1: '🌐 NoF1 English Framework',
    promptDescNof1Content:
      'Hyperliquid exchange specialist, English prompts, maximize risk-adjusted returns',
    promptDescTaroLong: '📈 Taro Long Position Strategy',
    promptDescTaroLongContent:
      'Data-driven decisions, multi-dimensional validation, continuous learning evolution, long position specialist',

    // Loading & Error
    loading: 'Loading...',

    // AI Traders Page - Additional
    inUse: 'In Use',
    noModelsConfigured: 'No configured AI models',
    noExchangesConfigured: 'No configured exchanges',
    signalSource: 'Signal Source',
    signalSourceConfig: 'Signal Source Configuration',
    ai500Description:
      'API endpoint for AI500 data provider, leave blank to disable this signal source',
    oiTopDescription:
      'API endpoint for open interest rankings, leave blank to disable this signal source',
    information: 'Information',
    signalSourceInfo1:
      '• Signal source configuration is per-user, each user can set their own URLs',
    signalSourceInfo2:
      '• When creating traders, you can choose whether to use these signal sources',
    signalSourceInfo3:
      '• Configured URLs will be used to fetch market data and trading signals',
    editAIModel: 'Edit AI Model',
    addAIModel: 'Add AI Model',
    confirmDeleteModel:
      'Are you sure you want to delete this AI model configuration?',
    cannotDeleteModelInUse:
      'Cannot delete this AI model because it is being used by traders',
    tradersUsing: 'Traders using this configuration',
    pleaseDeleteTradersFirst:
      'Please delete or reconfigure these traders first',
    selectModel: 'Select AI Model',
    pleaseSelectModel: 'Please select a model',
    customBaseURL: 'Base URL (Optional)',
    customBaseURLPlaceholder:
      'Custom API base URL, e.g.: https://api.openai.com/v1',
    leaveBlankForDefault: 'Leave blank to use default API address',
    modelConfigInfo1:
      '• For official API, only API Key is required, leave other fields blank',
    modelConfigInfo2:
      '• Custom Base URL and Model Name only needed for third-party proxies',
    modelConfigInfo3: '• API Key is encrypted and stored securely',
    defaultModel: 'Default model',
    applyApiKey: 'Apply API Key',
    kimiApiNote:
      'Kimi requires API Key from international site (moonshot.ai), China region keys are not compatible',
    leaveBlankForDefaultModel: 'Leave blank to use default model',
    customModelName: 'Model Name (Optional)',
    customModelNamePlaceholder: 'e.g.: deepseek-chat, qwen3-max, gpt-4o',
    saveConfig: 'Save Configuration',
    editExchange: 'Edit Exchange',
    addExchange: 'Add Exchange',
    confirmDeleteExchange:
      'Are you sure you want to delete this exchange configuration?',
    cannotDeleteExchangeInUse:
      'Cannot delete this exchange because it is being used by traders',
    pleaseSelectExchange: 'Please select an exchange',
    exchangeConfigWarning1:
      '• API keys will be encrypted, recommend using read-only or futures trading permissions',
    exchangeConfigWarning2:
      '• Do not grant withdrawal permissions to ensure fund security',
    exchangeConfigWarning3:
      '• After deleting configuration, related traders will not be able to trade',
    edit: 'Edit',
    viewGuide: 'View Guide',
    binanceSetupGuide: 'Binance Setup Guide',
    closeGuide: 'Close',
    whitelistIP: 'Whitelist IP',
    whitelistIPDesc: 'Binance requires adding server IP to API whitelist',
    serverIPAddresses: 'Server IP Addresses',
    copyIP: 'Copy',
    ipCopied: 'IP Copied',
    copyIPFailed: 'Failed to copy IP address. Please copy manually',
    loadingServerIP: 'Loading server IP...',

    // Error Messages
    createTraderFailed: 'Failed to create trader',
    getTraderConfigFailed: 'Failed to get trader configuration',
    modelConfigNotExist: 'Model configuration does not exist or is not enabled',
    exchangeConfigNotExist:
      'Exchange configuration does not exist or is not enabled',
    updateTraderFailed: 'Failed to update trader',
    deleteTraderFailed: 'Failed to delete trader',
    operationFailed: 'Operation failed',
    deleteConfigFailed: 'Failed to delete configuration',
    modelNotExist: 'Model does not exist',
    saveConfigFailed: 'Failed to save configuration',
    exchangeNotExist: 'Exchange does not exist',
    deleteExchangeConfigFailed: 'Failed to delete exchange configuration',
    saveSignalSourceFailed: 'Failed to save signal source configuration',
    encryptionFailed: 'Failed to encrypt sensitive data',

    // Login & Register
    login: 'Sign In',
    register: 'Sign Up',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    usernamePlaceholder: 'your username',
    emailPlaceholder: 'your@email.com',
    passwordPlaceholder: 'Enter your password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    passwordRequirements: 'Password requirements',
    passwordRuleMinLength: 'Minimum 8 characters',
    passwordRuleUppercase: 'At least 1 uppercase letter',
    passwordRuleLowercase: 'At least 1 lowercase letter',
    passwordRuleNumber: 'At least 1 number',
    passwordRuleSpecial: 'At least 1 special character (@#$%!&*?)',
    passwordRuleMatch: 'Passwords match',
    passwordNotMeetRequirements:
      'Password does not meet the security requirements',
    otpPlaceholder: '000000',
    loginTitle: 'Sign in to your account',
    registerTitle: 'Create a new account',
    loginButton: 'Sign In',
    registerButton: 'Sign Up',
    back: 'Back',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    registerNow: 'Sign up now',
    loginNow: 'Sign in now',
    forgotPassword: 'Forgot password?',
    rememberMe: 'Remember me',
    otpCode: 'OTP Code',
    resetPassword: 'Reset Password',
    resetPasswordTitle: 'Reset your password',
    newPassword: 'New Password',
    newPasswordPlaceholder: 'Enter new password (at least 6 characters)',
    resetPasswordButton: 'Reset Password',
    resetPasswordSuccess:
      'Password reset successful! Please login with your new password',
    resetPasswordFailed: 'Password reset failed',
    backToLogin: 'Back to Login',
    scanQRCode: 'Scan QR Code',
    enterOTPCode: 'Enter 6-digit OTP code',
    verifyOTP: 'Verify OTP',
    setupTwoFactor: 'Set up two-factor authentication',
    setupTwoFactorDesc:
      'Follow the steps below to secure your account with Google Authenticator',
    scanQRCodeInstructions:
      'Scan this QR code with Google Authenticator or Authy',
    otpSecret: 'Or enter this secret manually:',
    qrCodeHint: 'QR code (if scanning fails, use the secret below):',
    authStep1Title: 'Step 1: Install Google Authenticator',
    authStep1Desc:
      'Download and install Google Authenticator from your app store',
    authStep2Title: 'Step 2: Add account',
    authStep2Desc: 'Tap "+", then choose "Scan QR code" or "Enter a setup key"',
    authStep3Title: 'Step 3: Verify setup',
    authStep3Desc: 'After setup, continue to enter the 6-digit code',
    setupCompleteContinue: 'I have completed setup, continue',
    copy: 'Copy',
    completeRegistration: 'Complete Registration',
    completeRegistrationSubtitle: 'to complete registration',
    loginSuccess: 'Login successful',
    registrationSuccess: 'Registration successful',
    loginFailed: 'Login failed. Please check your email and password.',
    registrationFailed: 'Registration failed. Please try again.',
    verificationFailed:
      'OTP verification failed. Please check the code and try again.',
    sessionExpired: 'Session expired, please login again',
    invalidCredentials: 'Invalid email or password',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    passwordStrength: 'Password strength',
    passwordStrengthHint:
      'Use at least 8 characters with mix of letters, numbers and symbols',
    passwordMismatch: 'Passwords do not match',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    invalidEmail: 'Invalid email format',
    passwordTooShort: 'Password must be at least 6 characters',

    // Landing Page
    features: 'Features',
    howItWorks: 'How it Works',
    community: 'Community',
    language: 'Language',
    loggedInAs: 'Logged in as',
    exitLogin: 'Sign Out',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    registrationClosed: 'Registration Closed',
    registrationClosedMessage:
      'User registration is currently disabled. Please contact the administrator for access.',

    // Hero Section
    githubStarsInDays: '2.5K+ GitHub Stars in 3 days',
    heroTitle1: 'Read the Market.',
    heroTitle2: 'Write the Trade.',
    heroDescription:
      'NOFX is the future standard for AI trading — an open, community-driven agentic trading OS. Supporting Binance, Aster DEX and other exchanges, self-hosted, multi-agent competition, let AI automatically make decisions, execute and optimize trades for you.',
    poweredBy: 'Powered by Aster DEX and Binance.',

    // Landing Page CTA
    readyToDefine: 'Ready to define the future of AI trading?',
    startWithCrypto:
      'Starting with crypto markets, expanding to TradFi. NOFX is the infrastructure of AgentFi.',
    getStartedNow: 'Get Started Now',
    viewSourceCode: 'View Source Code',

    // Features Section
    coreFeatures: 'Core Features',
    whyChooseNofx: 'Why Choose NOFX?',
    openCommunityDriven:
      'Open source, transparent, community-driven AI trading OS',
    openSourceSelfHosted: '100% Open Source & Self-Hosted',
    openSourceDesc:
      'Your framework, your rules. Non-black box, supports custom prompts and multi-models.',
    openSourceFeatures1: 'Fully open source code',
    openSourceFeatures2: 'Self-hosting deployment support',
    openSourceFeatures3: 'Custom AI prompts',
    openSourceFeatures4: 'Multi-model support (DeepSeek, Qwen)',
    multiAgentCompetition: 'Multi-Agent Intelligent Competition',
    multiAgentDesc:
      'AI strategies battle at high speed in sandbox, survival of the fittest, achieving strategy evolution.',
    multiAgentFeatures1: 'Multiple AI agents running in parallel',
    multiAgentFeatures2: 'Automatic strategy optimization',
    multiAgentFeatures3: 'Sandbox security testing',
    multiAgentFeatures4: 'Cross-market strategy porting',
    secureReliableTrading: 'Secure and Reliable Trading',
    secureDesc:
      'Enterprise-grade security, complete control over your funds and trading strategies.',
    secureFeatures1: 'Local private key management',
    secureFeatures2: 'Fine-grained API permission control',
    secureFeatures3: 'Real-time risk monitoring',
    secureFeatures4: 'Trading log auditing',

    // About Section
    aboutNofx: 'About NOFX',
    whatIsNofx: 'What is NOFX?',
    nofxNotAnotherBot:
      "NOFX is not another trading bot, but the 'Linux' of AI trading —",
    nofxDescription1:
      'a transparent, trustworthy open source OS that provides a unified',
    nofxDescription2:
      "'decision-risk-execution' layer, supporting all asset classes.",
    nofxDescription3:
      'Starting with crypto markets (24/7, high volatility perfect testing ground), future expansion to stocks, futures, forex. Core: open architecture, AI',
    nofxDescription4:
      'Darwinism (multi-agent self-competition, strategy evolution), CodeFi',
    nofxDescription5:
      'flywheel (developers get point rewards for PR contributions).',
    youFullControl: 'You 100% Control',
    fullControlDesc: 'Complete control over AI prompts and funds',
    startupMessages1: 'Starting automated trading system...',
    startupMessages2: 'API server started on port 8080',
    startupMessages3: 'Web console http://127.0.0.1:3000',

    // How It Works Section
    howToStart: 'How to Get Started with NOFX',
    fourSimpleSteps:
      'Four simple steps to start your AI automated trading journey',
    step1Title: 'Clone GitHub Repository',
    step1Desc:
      'git clone https://github.com/NoFxAiOS/nofx and switch to dev branch to test new features.',
    step2Title: 'Configure Environment',
    step2Desc:
      'Frontend setup for exchange APIs (like Binance, Hyperliquid), AI models and custom prompts.',
    step3Title: 'Deploy & Run',
    step3Desc:
      'One-click Docker deployment, start AI agents. Note: High-risk market, only test with money you can afford to lose.',
    step4Title: 'Optimize & Contribute',
    step4Desc:
      'Monitor trading, submit PRs to improve framework. Join Telegram to share strategies.',
    importantRiskWarning: 'Important Risk Warning',
    riskWarningText:
      'Dev branch is unstable, do not use funds you cannot afford to lose. NOFX is non-custodial, no official strategies. Trading involves risks, invest carefully.',

    // Community Section (testimonials are kept as-is since they are quotes)

    // Footer Section
    futureStandardAI: 'The future standard of AI trading',
    links: 'Links',
    resources: 'Resources',
    documentation: 'Documentation',
    supporters: 'Supporters',
    strategicInvestment: '(Strategic Investment)',

    // Login Modal
    accessNofxPlatform: 'Access NOFX Platform',
    loginRegisterPrompt:
      'Please login or register to access the full AI trading platform',
    registerNewAccount: 'Register New Account',

    // Candidate Coins Warnings
    candidateCoins: 'Candidate Coins',
    candidateCoinsZeroWarning: 'Candidate Coins Count is 0',
    possibleReasons: 'Possible Reasons:',
    ai500ApiNotConfigured:
      'AI500 data provider API not configured or inaccessible (check signal source settings)',
    apiConnectionTimeout: 'API connection timeout or returned empty data',
    noCustomCoinsAndApiFailed:
      'No custom coins configured and API fetch failed',
    solutions: 'Solutions:',
    setCustomCoinsInConfig: 'Set custom coin list in trader configuration',
    orConfigureCorrectApiUrl: 'Or configure correct data provider API address',
    orDisableAI500Options:
      'Or disable "Use AI500 Data Provider" and "Use OI Top" options',
    signalSourceNotConfigured: 'Signal Source Not Configured',
    signalSourceWarningMessage:
      'You have traders that enabled "Use AI500 Data Provider" or "Use OI Top", but signal source API address is not configured yet. This will cause candidate coins count to be 0, and traders cannot work properly.',
    configureSignalSourceNow: 'Configure Signal Source Now',

    // FAQ Page
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about NOFX',
    faqStillHaveQuestions: 'Still Have Questions?',
    faqContactUs: 'Join our community or check our GitHub for more help',

    // FAQ Categories
    faqCategoryGettingStarted: 'Getting Started',
    faqCategoryInstallation: 'Installation',
    faqCategoryConfiguration: 'Configuration',
    faqCategoryTrading: 'Trading',
    faqCategoryTechnicalIssues: 'Technical Issues',
    faqCategorySecurity: 'Security',
    faqCategoryFeatures: 'Features',
    faqCategoryAIModels: 'AI Models',
    faqCategoryContributing: 'Contributing',

    // ===== GETTING STARTED =====
    faqWhatIsNOFX: 'What is NOFX?',
    faqWhatIsNOFXAnswer:
      'NOFX is an open-source AI-powered trading operating system for cryptocurrency and US stock markets. It uses large language models (LLMs) like DeepSeek, GPT, Claude, Gemini to analyze market data and make autonomous trading decisions. Key features include: multi-AI model support, multi-exchange trading, visual strategy builder, backtesting, and AI debate arena for consensus decisions.',

    faqHowDoesItWork: 'How does NOFX work?',
    faqHowDoesItWorkAnswer:
      'NOFX works in 5 steps: 1) Configure AI models and exchange API credentials; 2) Create a trading strategy (coin selection, indicators, risk controls); 3) Create a "Trader" combining AI model + Exchange + Strategy; 4) Start the trader - it will analyze market data at regular intervals and make buy/sell/hold decisions; 5) Monitor performance on the dashboard. The AI uses Chain of Thought reasoning to explain each decision.',

    faqIsProfitable: 'Is NOFX profitable?',
    faqIsProfitableAnswer:
      'AI trading is experimental and NOT guaranteed to be profitable. Cryptocurrency futures are highly volatile and risky. NOFX is designed for educational and research purposes. We strongly recommend: starting with small amounts (10-50 USDT), never investing more than you can afford to lose, thoroughly testing with backtests before live trading, and understanding that past performance does not guarantee future results.',

    faqSupportedExchanges: 'Which exchanges are supported?',
    faqSupportedExchangesAnswer:
      'CEX (Centralized): Binance Futures, Bybit, OKX, Bitget. DEX (Decentralized): Hyperliquid, Aster DEX, Lighter. Each exchange has different features - Binance has the most liquidity, Hyperliquid is fully on-chain with no KYC required. Check the documentation for setup guides for each exchange.',

    faqSupportedAIModels: 'Which AI models are supported?',
    faqSupportedAIModelsAnswer:
      'NOFX supports 7+ AI models: DeepSeek (recommended for cost/performance), Alibaba Qwen, OpenAI (GPT-5.2), Anthropic Claude, Google Gemini, xAI Grok, and Kimi (Moonshot). You can also use any OpenAI-compatible API endpoint. Each model has different strengths - DeepSeek is cost-effective, OpenAI models are powerful but expensive, Claude excels at reasoning.',

    faqSystemRequirements: 'What are the system requirements?',
    faqSystemRequirementsAnswer:
      'Minimum: 2 CPU cores, 2GB RAM, 1GB disk space, stable internet. Recommended: 4GB RAM for running multiple traders. Supported OS: Linux, macOS, or Windows (via Docker or WSL2). Docker is the easiest installation method. For manual installation, you need Go 1.21+, Node.js 18+, and TA-Lib library.',

    // ===== INSTALLATION =====
    faqHowToInstall: 'How do I install NOFX?',
    faqHowToInstallAnswer:
      'Easiest method (Linux/macOS): Run "curl -fsSL https://raw.githubusercontent.com/NoFxAiOS/nofx/main/install.sh | bash" - this installs Docker containers automatically. Then open http://127.0.0.1:3000 in your browser. For manual installation or development, clone the repository and follow the README instructions.',

    faqWindowsInstallation: 'How do I install on Windows?',
    faqWindowsInstallationAnswer:
      'Three options: 1) Docker Desktop (Recommended) - Install Docker Desktop, then run "docker compose -f docker-compose.prod.yml up -d" in PowerShell; 2) WSL2 - Install Windows Subsystem for Linux, then follow Linux installation; 3) Docker in WSL2 - Best of both worlds, run the install script in WSL2 terminal. Access via http://127.0.0.1:3000',

    faqDockerDeployment: 'Docker deployment keeps failing',
    faqDockerDeploymentAnswer:
      'Common solutions: 1) Check Docker is running: "docker info"; 2) Ensure sufficient memory (2GB minimum); 3) If stuck on "go build", try: "docker compose down && docker compose build --no-cache && docker compose up -d"; 4) Check logs: "docker compose logs -f"; 5) For slow pulls, configure a Docker mirror in daemon.json.',

    faqManualInstallation: 'How do I install manually for development?',
    faqManualInstallationAnswer:
      'Prerequisites: Go 1.21+, Node.js 18+, TA-Lib. Steps: 1) Clone repo: "git clone https://github.com/NoFxAiOS/nofx.git"; 2) Install backend deps: "go mod download"; 3) Install frontend deps: "cd web && npm install"; 4) Build backend: "go build -o nofx"; 5) Run backend: "./nofx"; 6) Run frontend (new terminal): "cd web && npm run dev". Access at http://127.0.0.1:3000',

    faqServerDeployment: 'How do I deploy to a remote server?',
    faqServerDeploymentAnswer:
      'Run the install script on your server - it auto-detects the server IP. Access via http://YOUR_SERVER_IP:3000. For HTTPS: 1) Use Cloudflare (free) - add domain, create A record pointing to server IP, set SSL to "Flexible"; 2) Enable TRANSPORT_ENCRYPTION=true in .env for browser-side encryption; 3) Access via https://your-domain.com',

    faqUpdateNOFX: 'How do I update NOFX?',
    faqUpdateNOFXAnswer:
      'For Docker: Run "docker compose pull && docker compose up -d" to pull latest images and restart. For manual installation: "git pull && go build -o nofx" for backend, "cd web && npm install && npm run build" for frontend. Your configurations in data.db are preserved during updates.',

    // ===== CONFIGURATION =====
    faqConfigureAIModels: 'How do I configure AI models?',
    faqConfigureAIModelsAnswer:
      'Go to Config page → AI Models section. For each model: 1) Get API key from the provider (links provided in UI); 2) Enter API key; 3) Optionally customize base URL and model name; 4) Save. API keys are encrypted before storage. Test the connection after saving to verify it works.',

    faqConfigureExchanges: 'How do I configure exchange connections?',
    faqConfigureExchangesAnswer:
      'Go to Config page → Exchanges section. Click "Add Exchange", select exchange type, and enter credentials. For CEX (Binance/Bybit/OKX): Need API Key + Secret Key (+ Passphrase for OKX). For DEX (Hyperliquid/Aster/Lighter): Need wallet address and private key. Always enable only necessary permissions (Futures Trading) and consider IP whitelisting.',

    faqBinanceAPISetup: 'How do I set up Binance API correctly?',
    faqBinanceAPISetupAnswer:
      'Important steps: 1) Create API key in Binance → API Management; 2) Enable ONLY "Enable Futures" permission; 3) Consider adding IP whitelist for security; 4) CRITICAL: Switch to Hedge Mode (双向持仓) in Futures settings → Preferences → Position Mode; 5) Ensure funds are in Futures wallet (not Spot). Common error -4061 means you need Hedge Mode.',

    faqHyperliquidSetup: 'How do I set up Hyperliquid?',
    faqHyperliquidSetupAnswer:
      'Hyperliquid is a decentralized exchange requiring wallet authentication. Steps: 1) Go to app.hyperliquid.xyz; 2) Connect your wallet; 3) Generate an API wallet (recommended) or use your main wallet; 4) Copy the wallet address and private key; 5) In NOFX, add Hyperliquid exchange with these credentials. No KYC required, fully on-chain.',

    faqCreateStrategy: 'How do I create a trading strategy?',
    faqCreateStrategyAnswer:
      'Go to Strategy Studio: 1) Coin Source - select which coins to trade (static list, AI500 pool, or OI Top ranking); 2) Indicators - enable technical indicators (EMA, MACD, RSI, ATR, Volume, OI, Funding Rate); 3) Risk Controls - leverage limits, max positions, margin usage cap, position size limits; 4) Custom Prompt (optional) - add specific instructions for the AI. Save and assign to a trader.',

    faqCreateTrader: 'How do I create and start a trader?',
    faqCreateTraderAnswer:
      'Go to Traders page: 1) Click "Create Trader"; 2) Select AI Model (must be configured first); 3) Select Exchange (must be configured first); 4) Select Strategy (or use default); 5) Set decision interval (e.g., 5 minutes); 6) Save, then click "Start" to begin trading. Monitor performance on Dashboard page.',

    // ===== TRADING =====
    faqHowAIDecides: 'How does the AI make trading decisions?',
    faqHowAIDecidesAnswer:
      'The AI uses Chain of Thought (CoT) reasoning in 4 steps: 1) Position Analysis - reviews current holdings and P/L; 2) Risk Assessment - checks account margin, available balance; 3) Opportunity Evaluation - analyzes market data, indicators, candidate coins; 4) Final Decision - outputs specific action (buy/sell/hold) with reasoning. You can view the full reasoning in decision logs.',

    faqDecisionFrequency: 'How often does the AI make decisions?',
    faqDecisionFrequencyAnswer:
      'Configurable per trader, default is 3-5 minutes. Considerations: Too frequent (1-2 min) = overtrading, high fees; Too slow (30+ min) = missed opportunities. Recommended: 5 minutes for active trading, 15-30 minutes for swing trading. The AI may decide to "hold" (no action) in many cycles.',

    faqNoTradesExecuting: "Why isn't my trader executing any trades?",
    faqNoTradesExecutingAnswer:
      'Common causes: 1) AI decided to wait (check decision logs for reasoning); 2) Insufficient balance in futures account; 3) Max positions limit reached (default: 3); 4) Exchange API issues (check error messages); 5) Strategy constraints too restrictive. Check Dashboard → Decision Logs for detailed AI reasoning each cycle.',

    faqOnlyShortPositions: 'Why is the AI only opening short positions?',
    faqOnlyShortPositionsAnswer:
      'This is usually due to Binance Position Mode. Solution: Switch to Hedge Mode (双向持仓) in Binance Futures → Preferences → Position Mode. You must close all positions first. After switching, the AI can open both long and short positions independently.',

    faqLeverageSettings: 'How do leverage settings work?',
    faqLeverageSettingsAnswer:
      'Leverage is set in Strategy → Risk Controls: BTC/ETH leverage (typically 5-20x) and Altcoin leverage (typically 3-10x). Higher leverage = higher risk and potential returns. Subaccounts may have restrictions (e.g., Binance subaccounts limited to 5x). The AI respects these limits when placing orders.',

    faqStopLossTakeProfit: 'Does NOFX support stop-loss and take-profit?',
    faqStopLossTakeProfitAnswer:
      'The AI can suggest stop-loss/take-profit levels in its decisions, but these are guidance-based rather than hard-coded exchange orders. The AI monitors positions each cycle and may decide to close based on P/L. For guaranteed stop-loss, you can set exchange-level orders manually or adjust the strategy prompt to be more conservative.',

    faqMultipleTraders: 'Can I run multiple traders?',
    faqMultipleTradersAnswer:
      'Yes! NOFX supports running 20+ concurrent traders. Each trader can have different: AI model, exchange account, strategy, decision interval. Use this to A/B test strategies, compare AI models, or diversify across exchanges. Monitor all traders on the Competition page.',

    faqAICosts: 'How much do AI API calls cost?',
    faqAICostsAnswer:
      'Approximate daily costs per trader (5-min intervals): DeepSeek: $0.10-0.50; Qwen: $0.20-0.80; OpenAI: $2-5; Claude: $1-3. Costs depend on prompt length and response tokens. DeepSeek offers the best cost/performance ratio. Longer decision intervals reduce costs.',

    // ===== TECHNICAL ISSUES =====
    faqPortInUse: 'Port 8080 or 3000 already in use',
    faqPortInUseAnswer:
      'Check what\'s using the port: "lsof -i :8080" (macOS/Linux) or "netstat -ano | findstr 8080" (Windows). Kill the process or change ports in .env: NOFX_BACKEND_PORT=8081, NOFX_FRONTEND_PORT=3001. Restart with "docker compose down && docker compose up -d".',

    faqFrontendNotLoading: 'Frontend shows "Loading..." forever',
    faqFrontendNotLoadingAnswer:
      'Backend may not be running or reachable. Check: 1) "curl http://127.0.0.1:8080/api/health" should return {"status":"ok"}; 2) "docker compose ps" to verify containers are running; 3) Check backend logs: "docker compose logs nofx-backend"; 4) Ensure firewall allows port 8080.',

    faqDatabaseLocked: 'Database locked error',
    faqDatabaseLockedAnswer:
      'Multiple processes accessing SQLite simultaneously. Solution: 1) Stop all processes: "docker compose down" or "pkill nofx"; 2) Remove lock files if present: "rm -f data/data.db-wal data/data.db-shm"; 3) Restart: "docker compose up -d". Only one backend instance should access the database.',

    faqTALibNotFound: 'TA-Lib not found during build',
    faqTALibNotFoundAnswer:
      'TA-Lib is required for technical indicators. Install: macOS: "brew install ta-lib"; Ubuntu/Debian: "sudo apt-get install libta-lib0-dev"; CentOS: "yum install ta-lib-devel". After installing, rebuild: "go build -o nofx". Docker images include TA-Lib pre-installed.',

    faqAIAPITimeout: 'AI API timeout or connection refused',
    faqAIAPITimeoutAnswer:
      'Check: 1) API key is valid (test with curl); 2) Network can reach API endpoint (ping/curl); 3) API provider is not down (check status page); 4) VPN/firewall not blocking; 5) Rate limits not exceeded. Default timeout is 120 seconds.',

    faqBinancePositionMode: 'Binance error code -4061 (Position Mode)',
    faqBinancePositionModeAnswer:
      'Error: "Order\'s position side does not match user\'s setting". You\'re in One-way Mode but NOFX requires Hedge Mode. Fix: 1) Close ALL positions first; 2) Binance Futures → Settings (gear icon) → Preferences → Position Mode → Switch to "Hedge Mode" (双向持仓); 3) Restart your trader.',

    faqBalanceShowsZero: 'Account balance shows 0',
    faqBalanceShowsZeroAnswer:
      'Funds are likely in Spot wallet, not Futures wallet. Solution: 1) In Binance, go to Wallet → Futures → Transfer; 2) Transfer USDT from Spot to Futures; 3) Refresh NOFX dashboard. Also check: funds not locked in savings/staking products.',

    faqDockerPullFailed: 'Docker image pull failed or slow',
    faqDockerPullFailedAnswer:
      'Docker Hub can be slow in some regions. Solutions: 1) Configure a Docker mirror in /etc/docker/daemon.json: {"registry-mirrors": ["https://mirror.gcr.io"]}; 2) Restart Docker; 3) Retry pull. Alternatively, use GitHub Container Registry (ghcr.io) which may have better connectivity in your region.',

    // ===== SECURITY =====
    faqAPIKeyStorage: 'How are API keys stored?',
    faqAPIKeyStorageAnswer:
      'API keys are encrypted using AES-256-GCM before storage in the local SQLite database. The encryption key (DATA_ENCRYPTION_KEY) is stored in your .env file. Keys are decrypted only in memory when needed for API calls. Never share your data.db or .env files.',

    faqEncryptionDetails: 'What encryption does NOFX use?',
    faqEncryptionDetailsAnswer:
      'NOFX uses multiple encryption layers: 1) AES-256-GCM for database storage (API keys, secrets); 2) RSA-2048 for optional transport encryption (browser to server); 3) JWT for authentication tokens. Keys are generated during installation. Enable TRANSPORT_ENCRYPTION=true for HTTPS environments.',

    faqSecurityBestPractices: 'What are security best practices?',
    faqSecurityBestPracticesAnswer:
      'Recommended: 1) Use exchange API keys with IP whitelist and minimal permissions (Futures Trading only); 2) Use dedicated subaccount for NOFX; 3) Enable TRANSPORT_ENCRYPTION for remote deployments; 4) Never share .env or data.db files; 5) Use HTTPS with valid certificates; 6) Regularly rotate API keys; 7) Monitor account activity.',

    faqCanNOFXStealFunds: 'Can NOFX steal my funds?',
    faqCanNOFXStealFundsAnswer:
      'NOFX is open-source (AGPL-3.0 license) - you can audit all code on GitHub. API keys are stored locally on YOUR machine, never sent to external servers. NOFX only has the permissions you grant via API keys. For maximum safety: use API keys with trading-only permissions (no withdrawal), enable IP whitelist, use a dedicated subaccount.',

    // ===== FEATURES =====
    faqStrategyStudio: 'What is Strategy Studio?',
    faqStrategyStudioAnswer:
      'Strategy Studio is a visual strategy builder where you configure: 1) Coin Sources - which cryptocurrencies to trade (static list, AI500 top coins, OI ranking); 2) Technical Indicators - EMA, MACD, RSI, ATR, Volume, Open Interest, Funding Rate; 3) Risk Controls - leverage limits, position sizing, margin caps; 4) Custom Prompts - specific instructions for AI. No coding required.',

    faqBacktestLab: 'What is Backtest Lab?',
    faqBacktestLabAnswer:
      'Backtest Lab tests your strategy against historical data without risking real funds. Features: 1) Configure AI model, date range, initial balance; 2) Watch real-time progress with equity curve; 3) View metrics: Return %, Max Drawdown, Sharpe Ratio, Win Rate; 4) Analyze individual trades and AI reasoning. Essential for validating strategies before live trading.',

    faqDebateArena: 'What is Debate Arena?',
    faqDebateArenaAnswer:
      'Debate Arena lets multiple AI models debate trading decisions before execution. Setup: 1) Choose 2-5 AI models; 2) Assign personalities (Bull, Bear, Analyst, Contrarian, Risk Manager); 3) Watch them debate in rounds; 4) Final decision based on consensus voting. Useful for high-conviction trades where you want multiple perspectives.',

    faqCompetitionMode: 'What is Competition Mode?',
    faqCompetitionModeAnswer:
      'Competition page shows a real-time leaderboard of all your traders. Compare: ROI, P&L, Sharpe ratio, win rate, number of trades. Use this to A/B test different AI models, strategies, or configurations. Traders can be marked as "Show in Competition" to appear on the leaderboard.',

    faqChainOfThought: 'What is Chain of Thought (CoT)?',
    faqChainOfThoughtAnswer:
      "Chain of Thought is the AI's reasoning process, visible in decision logs. The AI explains its thinking in 4 steps: 1) Current position analysis; 2) Account risk assessment; 3) Market opportunity evaluation; 4) Final decision rationale. This transparency helps you understand WHY the AI made each decision, useful for improving strategies.",

    // ===== AI MODELS =====
    faqWhichAIModelBest: 'Which AI model should I use?',
    faqWhichAIModelBestAnswer:
      'Recommended: DeepSeek for best cost/performance ratio ($0.10-0.50/day). Alternatives: OpenAI for best reasoning but expensive ($2-5/day); Claude for nuanced analysis; Qwen for competitive pricing. You can run multiple traders with different models to compare. Check the Competition page to see which performs best for your strategy.',

    faqCustomAIAPI: 'Can I use a custom AI API?',
    faqCustomAIAPIAnswer:
      'Yes! NOFX supports any OpenAI-compatible API. In Config → AI Models → Custom API: 1) Enter your API endpoint URL (e.g., https://your-api.com/v1); 2) Enter API key; 3) Specify model name. This works with self-hosted models, alternative providers, or Claude via third-party proxies.',

    faqAIHallucinations: 'What about AI hallucinations?',
    faqAIHallucinationsAnswer:
      'AI models can sometimes produce incorrect or fabricated information ("hallucinations"). NOFX mitigates this by: 1) Providing structured prompts with real market data; 2) Enforcing JSON output format for decisions; 3) Validating orders before execution. However, AI trading is experimental - always monitor decisions and don\'t rely solely on AI judgment.',

    faqCompareAIModels: 'How do I compare different AI models?',
    faqCompareAIModelsAnswer:
      'Create multiple traders with different AI models but same strategy/exchange. Run them simultaneously and compare on Competition page. Metrics to watch: ROI, win rate, Sharpe ratio, max drawdown. Alternatively, use Backtest Lab to test models against same historical data. The Debate Arena also shows how different models reason about the same situation.',

    // ===== CONTRIBUTING =====
    faqHowToContribute: 'How can I contribute to NOFX?',
    faqHowToContributeAnswer:
      'NOFX is open-source and welcomes contributions! Ways to contribute: 1) Code - fix bugs, add features (check GitHub Issues); 2) Documentation - improve guides, translate; 3) Bug Reports - report issues with details; 4) Feature Ideas - suggest improvements. Start with issues labeled "good first issue". All contributors may receive airdrop rewards.',

    faqPRGuidelines: 'What are the PR guidelines?',
    faqPRGuidelinesAnswer:
      'PR Process: 1) Fork repo to your account; 2) Create feature branch from dev: "git checkout -b feat/your-feature"; 3) Make changes, run lint: "npm --prefix web run lint"; 4) Commit with Conventional Commits format; 5) Push and create PR to NoFxAiOS/nofx:dev; 6) Reference related issue (Closes #123); 7) Wait for review. Keep PRs small and focused.',

    faqBountyProgram: 'Is there a bounty program?',
    faqBountyProgramAnswer:
      'Yes! Contributors receive airdrop rewards based on contributions: Code commits (highest weight), bug fixes, feature suggestions, documentation. Issues with "bounty" label have cash rewards. After completing work, submit a Bounty Claim. Check CONTRIBUTING.md for details on the reward structure.',

    faqReportBugs: 'How do I report bugs?',
    faqReportBugsAnswer:
      'For bugs: Open a GitHub Issue with: 1) Clear description of the problem; 2) Steps to reproduce; 3) Expected vs actual behavior; 4) System info (OS, Docker version, browser); 5) Relevant logs. For SECURITY vulnerabilities: Do NOT open public issues - DM @Web3Tinkle on Twitter instead.',

    // Web Crypto Environment Check
    environmentCheck: {
      button: 'Check Secure Environment',
      checking: 'Checking...',
      description:
        'Automatically verifying whether this browser context allows Web Crypto before entering sensitive keys.',
      secureTitle: 'Secure context detected',
      secureDesc:
        'Web Crypto API is available. You can continue entering secrets with encryption enabled.',
      insecureTitle: 'Insecure context detected',
      insecureDesc:
        'This page is not running over HTTPS or a trusted localhost origin, so browsers block Web Crypto calls.',
      tipsTitle: 'How to fix:',
      tipHTTPS:
        'Serve the dashboard over HTTPS with a valid certificate (IP origins also need TLS).',
      tipLocalhost:
        'During development, open the app via http://localhost or 127.0.0.1.',
      tipIframe:
        'Avoid embedding the app in insecure HTTP iframes or reverse proxies that strip HTTPS.',
      unsupportedTitle: 'Browser does not expose Web Crypto',
      unsupportedDesc:
        'Open NOFX over HTTPS (or http://localhost during development) and avoid insecure iframes/reverse proxies so the browser can enable Web Crypto.',
      summary: 'Current origin: {origin} • Protocol: {protocol}',
      disabledTitle: 'Transport encryption disabled',
      disabledDesc:
        'Server-side transport encryption is disabled. API keys will be transmitted in plaintext. Enable TRANSPORT_ENCRYPTION=true for enhanced security.',
    },

    environmentSteps: {
      checkTitle: '1. Environment check',
      selectTitle: '2. Select exchange',
    },

    // Two-Stage Key Modal
    twoStageKey: {
      title: 'Two-Stage Private Key Input',
      stage1Description:
        'Enter the first {length} characters of your private key',
      stage2Description:
        'Enter the remaining {length} characters of your private key',
      stage1InputLabel: 'First Part',
      stage2InputLabel: 'Second Part',
      characters: 'characters',
      processing: 'Processing...',
      nextButton: 'Next',
      cancelButton: 'Cancel',
      backButton: 'Back',
      encryptButton: 'Encrypt & Submit',
      obfuscationCopied: 'Obfuscation data copied to clipboard',
      obfuscationInstruction:
        'Paste something else to clear clipboard, then continue',
      obfuscationManual: 'Manual obfuscation required',
    },

    // Error Messages
    errors: {
      privatekeyIncomplete: 'Please enter at least {expected} characters',
      privatekeyInvalidFormat:
        'Invalid private key format (should be 64 hex characters)',
      privatekeyObfuscationFailed: 'Clipboard obfuscation failed',
    },

    // Position History
    positionHistory: {
      title: 'Position History',
      loading: 'Loading position history...',
      noHistory: 'No Position History',
      noHistoryDesc: 'Closed positions will appear here after trading.',
      showingPositions: 'Showing {count} of {total} positions',
      totalPnL: 'Total P&L',
      // Stats
      totalTrades: 'Total Trades',
      winLoss: 'Win: {win} / Loss: {loss}',
      winRate: 'Win Rate',
      profitFactor: 'Profit Factor',
      profitFactorDesc: 'Total Profit / Total Loss',
      plRatio: 'P/L Ratio',
      plRatioDesc: 'Avg Win / Avg Loss',
      sharpeRatio: 'Sharpe Ratio',
      sharpeRatioDesc: 'Risk-adjusted Return',
      maxDrawdown: 'Max Drawdown',
      avgWin: 'Avg Win',
      avgLoss: 'Avg Loss',
      netPnL: 'Net P&L',
      netPnLDesc: 'After Fees',
      fee: 'Fee',
      // Direction Stats
      trades: 'Trades',
      avgPnL: 'Avg P&L',
      // Symbol Performance
      symbolPerformance: 'Symbol Performance',
      // Filters
      symbol: 'Symbol',
      allSymbols: 'All Symbols',
      side: 'Side',
      all: 'All',
      sort: 'Sort',
      latestFirst: 'Latest First',
      oldestFirst: 'Oldest First',
      highestPnL: 'Highest P&L',
      lowestPnL: 'Lowest P&L',
      // Table Headers
      entry: 'Entry',
      exit: 'Exit',
      qty: 'Qty',
      value: 'Value',
      lev: 'Lev',
      pnl: 'P&L',
      duration: 'Duration',
      closedAt: 'Closed At',
    },

    // Debate Arena Page
    debatePage: {
      title: 'Market Debate Arena',
      subtitle: 'Watch AI models debate market conditions and reach consensus',
      newDebate: 'New Debate',
      noDebates: 'No debates yet',
      createFirst: 'Create your first debate to get started',
      selectDebate: 'Select a debate to view details',
      createDebate: 'Create Debate',
      creating: 'Creating...',
      debateName: 'Debate Name',
      debateNamePlaceholder: 'e.g., BTC Bull or Bear?',
      tradingPair: 'Trading Pair',
      strategy: 'Strategy',
      selectStrategy: 'Select a strategy',
      maxRounds: 'Max Rounds',
      autoExecute: 'Auto Execute',
      autoExecuteHint: 'Automatically execute the consensus trade',
      participants: 'Participants',
      addParticipant: 'Add AI Participant',
      noModels: 'No AI models available',
      atLeast2: 'Add at least 2 participants',
      personalities: {
        bull: 'Aggressive Bull',
        bear: 'Cautious Bear',
        analyst: 'Data Analyst',
        contrarian: 'Contrarian',
        risk_manager: 'Risk Manager',
      },
      status: {
        pending: 'Pending',
        running: 'Running',
        voting: 'Voting',
        completed: 'Completed',
        cancelled: 'Cancelled',
      },
      actions: {
        start: 'Start Debate',
        starting: 'Starting...',
        cancel: 'Cancel',
        delete: 'Delete',
        execute: 'Execute Trade',
      },
      round: 'Round',
      roundOf: 'Round {current} of {max}',
      messages: 'Messages',
      noMessages: 'No messages yet',
      waitingStart: 'Waiting for debate to start...',
      votes: 'Votes',
      consensus: 'Consensus',
      finalDecision: 'Final Decision',
      confidence: 'Confidence',
      votesCount: '{count} votes',
      decision: {
        open_long: 'Open Long',
        open_short: 'Open Short',
        close_long: 'Close Long',
        close_short: 'Close Short',
        hold: 'Hold',
        wait: 'Wait',
      },
      messageTypes: {
        analysis: 'Analysis',
        rebuttal: 'Rebuttal',
        vote: 'Vote',
        summary: 'Summary',
      },
    },
  },
  zh: {
    // Header
    appTitle: 'TradingParadise',
    subtitle: '多 AI 模型交易平台',
    aiTraders: 'AI 交易員',
    details: '詳情',
    tradingPanel: '交易面板',
    competition: '競賽',
    backtest: '回測',
    running: '運行中',
    stopped: '已停止',
    adminMode: '管理員模式',
    logout: '登出',
    switchTrader: '切換交易員:',
    view: '查看',

    // Navigation
    realtimeNav: '排行榜',
    configNav: '配置',
    dashboardNav: '儀表板',
    strategyNav: '策略',
    debateNav: '競技場',
    faqNav: '常見問題',

    // Footer
    footerTitle: 'TradingParadise - AI 交易系統',
    footerWarning: '⚠️ 交易有風險，請謹慎使用。',

    // Stats Cards
    totalEquity: '總淨值',
    availableBalance: '可用餘額',
    totalPnL: '總盈虧',
    positions: '持倉',
    margin: '保證金',
    free: '閒置',

    // Positions Table
    currentPositions: '當前持倉',
    active: '活躍',
    symbol: '幣種',
    side: '方向',
    entryPrice: '入場價',
    stopLoss: '止損',
    takeProfit: '止盈',
    riskReward: '風險回報比',
    markPrice: '標記價格',
    quantity: '數量',
    positionValue: '倉位價值',
    leverage: '槓桿',
    unrealizedPnL: '未實現盈虧',
    liqPrice: '強平價',
    long: '多頭',
    short: '空頭',
    noPositions: '無持倉',
    noActivePositions: '當前沒有活躍的交易持倉',

    // Recent Decisions
    recentDecisions: '最近決策',
    lastCycles: '最近 {count} 個交易週期',
    noDecisionsYet: '暫無決策',
    aiDecisionsWillAppear: 'AI 交易決策將顯示在這裡',
    cycle: '週期',
    success: '成功',
    failed: '失敗',
    inputPrompt: '輸入提示詞',
    aiThinking: '💭 AI 思維鏈分析',
    collapse: '▼ 收起',
    expand: '▶ 展開',

    // Equity Chart
    accountEquityCurve: '帳戶淨值曲線',
    noHistoricalData: '暫無歷史數據',
    dataWillAppear: '運行幾個週期後將顯示收益率曲線',
    initialBalance: '初始餘額',
    currentEquity: '當前淨值',
    historicalCycles: '歷史週期',
    displayRange: '顯示範圍',
    recent: '最近',
    allData: '全部數據',
    cycles: '個',

    // Comparison Chart
    comparisonMode: '對比模式',
    dataPoints: '數據點數',
    currentGap: '當前差距',
    count: '{count} 個',

    // TradingView Chart
    marketChart: '行情圖表',
    viewChart: '點擊查看圖表',
    enterSymbol: '輸入幣種...',
    popularSymbols: '熱門幣種',
    fullscreen: '全螢幕',
    exitFullscreen: '退出全螢幕',

    // Backtest Page
    backtestPage: {
      title: '回測實驗室',
      subtitle: '選擇模型與時間範圍，快速復盤 AI 決策鏈路。',
      start: '啟動回測',
      starting: '啟動中...',
      quickRanges: {
        h24: '24 小時',
        d3: '3 天',
        d7: '7 天',
      },
      actions: {
        pause: '暫停',
        resume: '恢復',
        stop: '停止',
      },
      states: {
        running: '運行中',
        paused: '已暫停',
        completed: '已完成',
        failed: '失敗',
        liquidated: '已爆倉',
      },
      form: {
        aiModelLabel: 'AI 模型',
        selectAiModel: '選擇 AI 模型',
        providerLabel: 'Provider',
        statusLabel: '狀態',
        enabled: '已啟用',
        disabled: '未啟用',
        noModelWarning: '請先在「模型配置」頁面新增並啟用 AI 模型。',
        runIdLabel: 'Run ID',
        runIdPlaceholder: '留空則自動產生',
        decisionTfLabel: '決策週期',
        cadenceLabel: '決策節奏（根數）',
        timeRangeLabel: '時間範圍',
        symbolsLabel: '交易標的（逗號分隔）',
        customTfPlaceholder: '自訂週期（逗號分隔，例如 2h,6h）',
        initialBalanceLabel: '初始資金 (USDT)',
        feeLabel: '手續費 (bps)',
        slippageLabel: '滑點 (bps)',
        btcEthLeverageLabel: 'BTC/ETH 槓桿 (倍)',
        altcoinLeverageLabel: '山寨幣槓桿 (倍)',
        fillPolicies: {
          nextOpen: '下一根開盤價',
          barVwap: 'K 線 VWAP',
          midPrice: '中間價',
        },
        promptPresets: {
          baseline: '基礎版',
          aggressive: '激進版',
          conservative: '穩健版',
          scalping: '剝頭皮',
        },
        cacheAiLabel: '重複使用 AI 快取',
        replayOnlyLabel: '僅重播紀錄',
        overridePromptLabel: '僅使用自訂提示詞',
        customPromptLabel: '自訂提示詞（可選）',
        customPromptPlaceholder: '追加或完全自訂策略提示詞',
      },
      runList: {
        title: '運行列表',
        count: '共 {count} 條紀錄',
      },
      filters: {
        allStates: '全部狀態',
        searchPlaceholder: 'Run ID / 標籤',
      },
      tableHeaders: {
        runId: 'Run ID',
        label: '標籤',
        state: '狀態',
        progress: '進度',
        equity: '淨值',
        lastError: '最後錯誤',
        updated: '更新時間',
      },
      emptyStates: {
        noRuns: '暫無紀錄',
        selectRun: '請選擇一個運行查看詳情',
      },
      detail: {
        tfAndSymbols: '週期: {tf} · 幣種 {count}',
        labelPlaceholder: '備註標籤',
        saveLabel: '儲存',
        deleteLabel: '刪除',
        exportLabel: '匯出',
        errorLabel: '錯誤',
      },
      toasts: {
        selectModel: '請先選擇一個 AI 模型。',
        modelDisabled: 'AI 模型 {name} 尚未啟用。',
        invalidRange: '結束時間必須晚於開始時間。',
        startSuccess: '回測 {id} 已啟動。',
        startFailed: '啟動失敗，請稍後再試。',
        actionSuccess: '{action} {id} 成功。',
        actionFailed: '操作失敗，請稍後再試。',
        labelSaved: '標籤已更新。',
        labelFailed: '更新標籤失敗。',
        confirmDelete: '確認刪除回測 {id} 嗎？該操作不可恢復。',
        deleteSuccess: '回測紀錄已刪除。',
        deleteFailed: '刪除失敗，請稍後再試。',
        traceFailed: '獲取 AI 思維鏈失敗。',
        exportSuccess: '已匯出 {id} 的數據。',
        exportFailed: '匯出失敗。',
      },
      aiTrace: {
        title: 'AI 思維鏈',
        clear: '清除',
        cyclePlaceholder: '循環編號',
        fetch: '獲取',
        prompt: '提示詞',
        cot: '思考鏈',
        output: '輸出',
        cycleTag: '週期 #{cycle}',
      },
      decisionTrail: {
        title: 'AI 決策軌跡',
        subtitle: '展示最近 {count} 次循環',
        empty: '暫無紀錄',
        emptyHint: '回測運行後將自動記錄每次 AI 思考與執行',
      },
      charts: {
        equityTitle: '淨值曲線',
        equityEmpty: '暫無數據',
      },
      metrics: {
        title: '指標',
        totalReturn: '總收益率 %',
        maxDrawdown: '最大回撤 %',
        sharpe: '夏普比率',
        profitFactor: '獲利因子',
        pending: '計算中...',
        realized: '已實現盈虧',
        unrealized: '未實現盈虧',
      },
      trades: {
        title: '交易事件',
        headers: {
          time: '時間',
          symbol: '幣種',
          action: '操作',
          qty: '數量',
          leverage: '槓桿',
          pnl: '盈虧',
        },
        empty: '暫無交易',
      },
      metadata: {
        title: '元資訊',
        created: '建立時間',
        updated: '更新時間',
        processedBars: '已處理 K 線',
        maxDrawdown: '最大回撤',
        liquidated: '是否爆倉',
        yes: '是',
        no: '否',
      },
    },

    // Competition Page
    aiCompetition: 'AI 競賽',
    traders: '交易員',
    liveBattle: '即時對戰',
    realTimeBattle: '即時對戰',
    leader: '領先者',
    leaderboard: '排行榜',
    live: '即時',
    realTime: '即時',
    performanceComparison: '表現對比',
    realTimePnL: '即時收益率',
    realTimePnLPercent: '即時收益率',
    headToHead: '正面對決',
    leadingBy: '領先 {gap}%',
    behindBy: '落後 {gap}%',
    equity: '權益',
    pnl: '收益',
    pos: '持倉',

    // AI Traders Management
    manageAITraders: '管理您的 AI 交易機器人',
    aiModels: 'AI 模型',
    exchanges: '交易所',
    createTrader: '建立交易員',
    modelConfiguration: '模型配置',
    configured: '已配置',
    notConfigured: '未配置',
    currentTraders: '當前交易員',
    noTraders: '暫無 AI 交易員',
    createFirstTrader: '建立您的第一個 AI 交易員開始使用',
    dashboardEmptyTitle: '開始使用吧！',
    dashboardEmptyDescription:
      '建立您的第一個 AI 交易員，自動化您的交易策略。連接交易所、選擇 AI 模型，幾分鐘內即可開始交易！',
    goToTradersPage: '建立您的第一個交易員',
    configureModelsFirst: '請先配置 AI 模型',
    configureExchangesFirst: '請先配置交易所',
    configureModelsAndExchangesFirst: '請先配置 AI 模型和交易所',
    modelNotConfigured: '所選模型未配置',
    exchangeNotConfigured: '所選交易所未配置',
    confirmDeleteTrader: '確定要刪除這個交易員嗎？',
    status: '狀態',
    start: '啟動',
    stop: '停止',
    createNewTrader: '建立新的 AI 交易員',
    selectAIModel: '選擇 AI 模型',
    selectExchange: '選擇交易所',
    traderName: '交易員名稱',
    enterTraderName: '輸入交易員名稱',
    cancel: '取消',
    create: '建立',
    configureAIModels: '配置 AI 模型',
    configureExchanges: '配置交易所',
    aiScanInterval: 'AI 掃描決策間隔 (分鐘)',
    scanIntervalRecommend: '建議: 3-10 分鐘',
    useTestnet: '使用測試網',
    enabled: '啟用',
    save: '儲存',

    // AI Model Configuration
    officialAPI: '官方 API',
    customAPI: '自訂 API',
    apiKey: 'API 金鑰',
    customAPIURL: '自訂 API 地址',
    enterAPIKey: '請輸入 API 金鑰',
    enterCustomAPIURL: '請輸入自訂 API 端點地址',
    useOfficialAPI: '使用官方 API 服務',
    useCustomAPI: '使用自訂 API 端點',

    // Exchange Configuration
    secretKey: '密鑰',
    privateKey: '私鑰',
    walletAddress: '錢包地址',
    user: '使用者名稱',
    signer: '簽名者',
    passphrase: '通行密碼',
    enterSecretKey: '輸入密鑰',
    enterPrivateKey: '輸入私鑰',
    enterWalletAddress: '輸入錢包地址',
    enterUser: '輸入使用者名稱',
    enterSigner: '輸入簽名者地址',
    enterPassphrase: '輸入 Passphrase',
    hyperliquidPrivateKeyDesc: 'Hyperliquid 使用私鑰進行交易認證',
    hyperliquidWalletAddressDesc: '與私鑰對應的錢包地址',
    // Hyperliquid 代理钱包 (新安全模型)
    hyperliquidAgentWalletTitle: 'Hyperliquid 代理錢包配置',
    hyperliquidAgentWalletDesc:
      '使用代理錢包安全交易：代理錢包用於簽名（餘額~0），主錢包持有資金（永不暴露私鑰）',
    hyperliquidAgentPrivateKey: '代理私鑰',
    enterHyperliquidAgentPrivateKey: '輸入代理錢包私鑰',
    hyperliquidAgentPrivateKeyDesc: '代理錢包僅有交易權限，無法提現',
    hyperliquidMainWalletAddress: '主錢包地址',
    enterHyperliquidMainWalletAddress: '輸入主錢包地址',
    hyperliquidMainWalletAddressDesc:
      '持有交易資金的主錢包地址（永不暴露其私鑰）',
    // Aster API Pro 配置
    asterApiProTitle: 'Aster API Pro 代理錢包配置',
    asterApiProDesc:
      '使用 API Pro 代理錢包安全交易：代理錢包用於簽名交易，主錢包持有資金（永不暴露主錢包私鑰）',
    asterUserDesc:
      '主錢包地址 - 您用於登入 Aster 的 EVM 錢包地址（僅支援 EVM 錢包）',
    asterSignerDesc:
      'API Pro 代理錢包地址 (0x...) - 從 https://www.asterdex.com/zh-CN/api-wallet 產生',
    asterPrivateKeyDesc:
      'API Pro 代理錢包私鑰 - 從 https://www.asterdex.com/zh-CN/api-wallet 獲取（僅在本地用於簽名，不會被傳輸）',
    asterUsdtWarning:
      '重要提示：Aster 僅統計 USDT 餘額。請確保您使用 USDT 作為保證金幣種，避免其他資產（BNB、ETH 等）的價格波動導致盈虧統計錯誤',
    asterUserLabel: '主錢包地址',
    asterSignerLabel: 'API Pro 代理錢包地址',
    asterPrivateKeyLabel: 'API Pro 代理錢包私鑰',
    enterAsterUser: '輸入主錢包地址 (0x...)',
    enterAsterSigner: '輸入 API Pro 代理錢包地址 (0x...)',
    enterAsterPrivateKey: '輸入 API Pro 代理錢包私鑰',

    // LIGHTER 配置
    lighterWalletAddress: 'L1 錢包地址',
    lighterPrivateKey: 'L1 私鑰',
    lighterApiKeyPrivateKey: 'API Key 私鑰',
    enterLighterWalletAddress: '請輸入以太坊錢包地址（0x...）',
    enterLighterPrivateKey: '請輸入 L1 私鑰（32 位元組）',
    enterLighterApiKeyPrivateKey: '請輸入 API Key 私鑰（40 位元組，可選）',
    lighterWalletAddressDesc: '您的以太坊錢包地址，用於識別帳戶',
    lighterPrivateKeyDesc: 'L1 私鑰用於帳戶識別（32 位元組 ECDSA 私鑰）',
    lighterApiKeyPrivateKeyDesc:
      'API Key 私鑰用於簽名交易（40 位元組 Poseidon2 私鑰）',
    lighterApiKeyOptionalNote:
      '如果不提供 API Key，系統將使用功能受限的 V1 模式',
    lighterV1Description: '基本模式 - 功能受限，僅用於測試框架',
    lighterV2Description: '完整模式 - 支援 Poseidon2 簽名和真實交易',
    lighterPrivateKeyImported: 'LIGHTER 私鑰已匯入',

    // Exchange names
    hyperliquidExchangeName: 'Hyperliquid',
    asterExchangeName: 'Aster DEX',

    // Secure input
    secureInputButton: '安全輸入',
    secureInputReenter: '重新安全輸入',
    secureInputClear: '清除',
    secureInputHint:
      '已通過安全雙階段輸入設定。若需修改，請點擊「重新安全輸入」。',

    // Two Stage Key Modal
    twoStageModalTitle: '安全私鑰輸入',
    twoStageModalDescription: '使用雙階段流程安全輸入長度為 {length} 的私鑰。',
    twoStageStage1Title: '步驟一 · 輸入前半段',
    twoStageStage1Placeholder: '前 32 位字元（若有 0x 前綴請保留）',
    twoStageStage1Hint:
      '繼續後會將擾動字串複製到剪貼簿，用於迷惑剪貼簿監控。',
    twoStageStage1Error: '請先輸入第一段私鑰。',
    twoStageNext: '下一步',
    twoStageProcessing: '處理中…',
    twoStageCancel: '取消',
    twoStageStage2Title: '步驟二 · 輸入剩餘部分',
    twoStageStage2Placeholder: '剩餘的私鑰字元',
    twoStageStage2Hint: '將擾動字串貼到任意位置後，再完成私鑰輸入。',
    twoStageClipboardSuccess:
      '擾動字串已複製。請在完成前在任意文字處貼上一次以迷惑剪貼簿記錄。',
    twoStageClipboardReminder:
      '記得在提交前貼上一次擾動字串，降低剪貼簿洩漏風險。',
    twoStageClipboardManual: '自動複製失敗，請手動複製下面的擾動字串。',
    twoStageBack: '返回',
    twoStageSubmit: '確認',
    twoStageInvalidFormat:
      '私鑰格式不正確，應為 {length} 位十六進位字元（可選 0x 前綴）。',
    testnetDescription: '啟用後將連接到交易所測試環境，用於模擬交易',
    securityWarning: '安全提示',
    saveConfiguration: '儲存配置',

    // Trader Configuration
    positionMode: '倉位模式',
    crossMarginMode: '全倉模式',
    isolatedMarginMode: '逐倉模式',
    crossMarginDescription: '全倉模式：所有倉位共享帳戶餘額作為保證金',
    isolatedMarginDescription: '逐倉模式：每個倉位獨立管理保證金，風險隔離',
    leverageConfiguration: '槓桿配置',
    btcEthLeverage: 'BTC/ETH 槓桿',
    altcoinLeverage: '山寨幣槓桿',
    leverageRecommendation: '推薦：BTC/ETH 5-10 倍，山寨幣 3-5 倍，控制風險',
    tradingSymbols: '交易幣種',
    tradingSymbolsPlaceholder:
      '輸入幣種，逗號分隔（如：BTCUSDT,ETHUSDT,SOLUSDT）',
    selectSymbols: '選擇幣種',
    selectTradingSymbols: '選擇交易幣種',
    selectedSymbolsCount: '已選擇 {count} 個幣種',
    clearSelection: '清空選擇',
    confirmSelection: '確認選擇',
    tradingSymbolsDescription:
      '留空 = 使用預設幣種。必須以 USDT 結尾（如：BTCUSDT, ETHUSDT）',
    btcEthLeverageValidation: 'BTC/ETH 槓桿必須在 1-50 倍之間',
    altcoinLeverageValidation: '山寨幣槓桿必須在 1-20 倍之間',
    invalidSymbolFormat: '無效的幣種格式：{symbol}，必須以 USDT 結尾',

    // System Prompt Templates
    systemPromptTemplate: '系統提示詞範本',
    promptTemplateDefault: '預設穩健',
    promptTemplateAdaptive: '保守策略',
    promptTemplateAdaptiveRelaxed: '激進策略',
    promptTemplateHansen: 'Hansen 策略',
    promptTemplateNof1: 'NoF1 英文框架',
    promptTemplateTaroLong: 'Taro 長倉',
    promptDescDefault: '📊 預設穩健策略',
    promptDescDefaultContent:
      '最大化夏普比率，平衡風險收益，適合新手和長期穩定交易',
    promptDescAdaptive: '🛡️ 保守策略 (v6.0.0)',
    promptDescAdaptiveContent:
      '嚴格風控，BTC 強制確認，高勝率優先，適合保守型交易者',
    promptDescAdaptiveRelaxed: '⚡ 激進策略 (v6.0.0)',
    promptDescAdaptiveRelaxedContent:
      '高頻交易，BTC 可選確認，追求交易機會，適合波動市場',
    promptDescHansen: '🎯 Hansen 策略',
    promptDescHansenContent: 'Hansen 定製策略，最大化夏普比率，專業交易者專用',
    promptDescNof1: '🌐 NoF1 英文框架',
    promptDescNof1Content:
      'Hyperliquid 交易所專用，英文提示詞，風險調整回報最大化',
    promptDescTaroLong: '📈 Taro 長倉策略',
    promptDescTaroLongContent:
      '數據驅動決策，多維度驗證，持續學習進化，長倉專用',

    // Loading & Error
    loading: '載入中...',

    // AI Traders Page - Additional
    inUse: '正在使用',
    noModelsConfigured: '暫無已配置的 AI 模型',
    noExchangesConfigured: '暫無已配置的交易所',
    signalSource: '訊號源',
    signalSourceConfig: '訊號源配置',
    ai500Description:
      '用於獲取 AI500 數據源的 API 地址，留空則不使用此數據源',
    oiTopDescription:
      '用於獲取持倉量排行數據的 API 地址，留空則不使用此訊號源',
    information: '說明',
    signalSourceInfo1:
      '• 訊號源配置為用戶級別，每個用戶可以設定自己的訊號源 URL',
    signalSourceInfo2: '• 在建立交易員時可以選擇是否使用這些訊號源',
    signalSourceInfo3: '• 配置的 URL 將用於獲取市場數據和交易訊號',
    editAIModel: '編輯 AI 模型',
    addAIModel: '新增 AI 模型',
    confirmDeleteModel: '確定要刪除此 AI 模型配置嗎？',
    cannotDeleteModelInUse: '無法刪除此 AI 模型，因為有交易員正在使用',
    tradersUsing: '正在使用此配置的交易員',
    pleaseDeleteTradersFirst: '請先刪除或重新配置這些交易員',
    selectModel: '選擇 AI 模型',
    pleaseSelectModel: '請選擇模型',
    customBaseURL: 'Base URL (可選)',
    customBaseURLPlaceholder:
      '自訂 API 基礎 URL，如: https://api.openai.com/v1',
    leaveBlankForDefault: '留空則使用預設 API 地址',
    modelConfigInfo1: '• 使用官方 API 時，只需填寫 API Key，其他欄位留空即可',
    modelConfigInfo2:
      '• 自訂 Base URL 和 Model Name 僅在使用第三方代理時需要填寫',
    modelConfigInfo3: '• API Key 加密儲存，不會明文展示',
    defaultModel: '預設模型',
    applyApiKey: '申請 API Key',
    kimiApiNote:
      'Kimi 需要從國際站申請 API Key (moonshot.ai)，中國區 Key 不通用',
    leaveBlankForDefaultModel: '留空使用預設模型名稱',
    customModelName: 'Model Name (可選)',
    customModelNamePlaceholder: '例如: deepseek-chat, qwen3-max, gpt-4o',
    saveConfig: '儲存配置',
    editExchange: '編輯交易所',
    addExchange: '新增交易所',
    confirmDeleteExchange: '確定要刪除此交易所配置嗎？',
    cannotDeleteExchangeInUse: '無法刪除此交易所，因為有交易員正在使用',
    pleaseSelectExchange: '請選擇交易所',
    exchangeConfigWarning1:
      '• API 金鑰將被加密儲存，建議使用唯讀或期貨交易權限',
    exchangeConfigWarning2: '• 不要授予提現權限，確保資金安全',
    exchangeConfigWarning3: '• 刪除配置後，相關交易員將無法正常交易',
    edit: '編輯',
    viewGuide: '查看教學',
    binanceSetupGuide: '幣安配置教學',
    closeGuide: '關閉',
    whitelistIP: '白名單 IP',
    whitelistIPDesc: '幣安交易所需要填寫白名單 IP',
    serverIPAddresses: '伺服器 IP 地址',
    copyIP: '複製',
    ipCopied: 'IP 已複製',
    copyIPFailed: 'IP 地址複製失敗，請手動複製',
    loadingServerIP: '正在載入伺服器 IP...',

    // Error Messages
    createTraderFailed: '建立交易員失敗',
    getTraderConfigFailed: '獲取交易員配置失敗',
    modelConfigNotExist: 'AI 模型配置不存在或未啟用',
    exchangeConfigNotExist: '交易所配置不存在或未啟用',
    updateTraderFailed: '更新交易員失敗',
    deleteTraderFailed: '刪除交易員失敗',
    operationFailed: '操作失敗',
    deleteConfigFailed: '刪除配置失敗',
    modelNotExist: '模型不存在',
    saveConfigFailed: '儲存配置失敗',
    exchangeNotExist: '交易所不存在',
    deleteExchangeConfigFailed: '刪除交易所配置失敗',
    saveSignalSourceFailed: '儲存訊號源配置失敗',
    encryptionFailed: '加密敏感數據失敗',

    // Login & Register
    login: '登入',
    register: '註冊',
    username: '使用者名稱',
    email: '電子信箱',
    password: '密碼',
    confirmPassword: '確認密碼',
    usernamePlaceholder: '請輸入使用者名稱',
    emailPlaceholder: '請輸入電子信箱地址',
    passwordPlaceholder: '請輸入密碼（至少 6 位）',
    confirmPasswordPlaceholder: '請再次輸入密碼',
    passwordRequirements: '密碼要求',
    passwordRuleMinLength: '至少 8 位',
    passwordRuleUppercase: '至少 1 個大寫字母',
    passwordRuleLowercase: '至少 1 個小寫字母',
    passwordRuleNumber: '至少 1 個數字',
    passwordRuleSpecial: '至少 1 個特殊字元（@#$%!&*?）',
    passwordRuleMatch: '兩次密碼一致',
    passwordNotMeetRequirements: '密碼不符合安全要求',
    otpPlaceholder: '000000',
    loginTitle: '登入到您的帳戶',
    registerTitle: '建立新帳戶',
    loginButton: '登入',
    registerButton: '註冊',
    back: '返回',
    noAccount: '還沒有帳戶？',
    hasAccount: '已有帳戶？',
    registerNow: '立即註冊',
    loginNow: '立即登入',
    forgotPassword: '忘記密碼？',
    rememberMe: '記住我',
    resetPassword: '重設密碼',
    resetPasswordTitle: '重設您的密碼',
    newPassword: '新密碼',
    newPasswordPlaceholder: '請輸入新密碼（至少 6 位）',
    resetPasswordButton: '重設密碼',
    resetPasswordSuccess: '密碼重設成功！請使用新密碼登入',
    resetPasswordFailed: '密碼重設失敗',
    backToLogin: '返回登入',
    otpCode: 'OTP 驗證碼',
    scanQRCode: '掃描 QR Code',
    enterOTPCode: '輸入 6 位 OTP 驗證碼',
    verifyOTP: '驗證 OTP',
    setupTwoFactor: '設定雙重認證',
    setupTwoFactorDesc: '請按以下步驟設定 Google 驗證器以保護您的帳戶安全',
    scanQRCodeInstructions: '使用 Google Authenticator 或 Authy 掃描此 QR Code',
    otpSecret: '或手動輸入此密鑰：',
    qrCodeHint: 'QR Code（如果無法掃描，請使用下方密鑰）：',
    authStep1Title: '步驟 1：下載 Google Authenticator',
    authStep1Desc: '在手機應用商店下載並安裝 Google Authenticator 應用程式',
    authStep2Title: '步驟 2：新增帳戶',
    authStep2Desc: '在應用程式中點擊「+」，選擇「掃描 QR Code」或「手動輸入金鑰」',
    authStep3Title: '步驟 3：驗證設定',
    authStep3Desc: '設定完成後，點擊下方按鈕輸入 6 位驗證碼',
    setupCompleteContinue: '我已完成設定，繼續',
    copy: '複製',
    completeRegistration: '完成註冊',
    completeRegistrationSubtitle: '以完成註冊',
    loginSuccess: '登入成功',
    registrationSuccess: '註冊成功',
    loginFailed: '登入失敗，請檢查您的電子信箱和密碼。',
    registrationFailed: '註冊失敗，請重試。',
    verificationFailed: 'OTP 驗證失敗，請檢查驗證碼後重試。',
    sessionExpired: '登入已過期，請重新登入',
    invalidCredentials: '電子信箱或密碼錯誤',
    weak: '弱',
    medium: '中',
    strong: '強',
    passwordStrength: '密碼強度',
    passwordStrengthHint: '建議至少 8 位，包含大小寫、數字和符號',
    passwordMismatch: '兩次輸入的密碼不一致',
    emailRequired: '請輸入電子信箱',
    passwordRequired: '請輸入密碼',
    invalidEmail: '電子信箱格式不正確',
    passwordTooShort: '密碼至少需要 6 個字元',

    // Landing Page
    features: '功能',
    howItWorks: '如何運作',
    community: '社群',
    language: '語言',
    loggedInAs: '已登入為',
    exitLogin: '登出',
    signIn: '登入',
    signUp: '註冊',
    registrationClosed: '註冊已關閉',
    registrationClosedMessage:
      '平台當前不開放新用戶註冊，如需訪問請聯繫管理員獲取帳號。',

    // Hero Section
    githubStarsInDays: '3 天內 2.5K+ GitHub Stars',
    heroTitle1: 'Read the Market.',
    heroTitle2: 'Write the Trade.',
    heroDescription:
      'NOFX 是 AI 交易的未來標準——一個開放、社群驅動的代理式交易作業系統。支援 Binance、Aster DEX 等交易所，自託管、多代理競爭，讓 AI 為你自動決策、執行和最佳化交易。',
    poweredBy: '由 Aster DEX 和 Binance 提供支援。',

    // Landing Page CTA
    readyToDefine: '準備好定義 AI 交易的未來嗎？',
    startWithCrypto:
      '從加密市場起步，擴展到 TradFi。NOFX 是 AgentFi 的基礎設施。',
    getStartedNow: '立即開始',
    viewSourceCode: '查看原始碼',

    // Features Section
    coreFeatures: '核心功能',
    whyChooseNofx: '為什麼選擇 NOFX？',
    openCommunityDriven: '開源、透明、社群驅動的 AI 交易作業系統',
    openSourceSelfHosted: '100% 開源與自託管',
    openSourceDesc: '你的框架，你的規則。非黑箱，支援自訂提示詞和多模型。',
    openSourceFeatures1: '完全開源程式碼',
    openSourceFeatures2: '支援自託管部署',
    openSourceFeatures3: '自訂 AI 提示詞',
    openSourceFeatures4: '多模型支援（DeepSeek、Qwen）',
    multiAgentCompetition: '多代理智能競爭',
    multiAgentDesc: 'AI 策略在沙盒中高速戰鬥，最優者生存，實現策略進化。',
    multiAgentFeatures1: '多 AI 代理並行運行',
    multiAgentFeatures2: '策略自動最佳化',
    multiAgentFeatures3: '沙盒安全測試',
    multiAgentFeatures4: '跨市場策略移植',
    secureReliableTrading: '安全可靠交易',
    secureDesc: '企業級安全保障，完全掌控你的資金和交易策略。',
    secureFeatures1: '本地私鑰管理',
    secureFeatures2: 'API 權限精細控制',
    secureFeatures3: '即時風險監控',
    secureFeatures4: '交易日誌審計',

    // About Section
    aboutNofx: '關於 TradingParadise',
    whatIsNofx: '什麼是 TradingParadise？',
    nofxNotAnotherBot:
      "TradingParadise 不是另一個交易機器人，而是 AI 交易的 'Linux' ——",
    nofxDescription1:
      "一個透明、可信任的開源 OS，提供統一的 '決策-風險-執行'",
    nofxDescription2: '層，支援所有資產類別。',
    nofxDescription3:
      '從加密市場起步（24/7、高波動性完美測試場），未來擴展到股票、期貨、外匯。核心：開放架構、AI',
    nofxDescription4:
      '達爾文主義（多代理自競爭、策略進化）、CodeFi 飛輪（開發者 PR',
    nofxDescription5: '貢獻獲積分獎勵）。',
    youFullControl: '你 100% 掌控',
    fullControlDesc: '完全掌控 AI 提示詞和資金',
    startupMessages1: '啟動自動交易系統...',
    startupMessages2: 'API 伺服器啟動在連接埠 8080',
    startupMessages3: 'Web 控制台 http://127.0.0.1:3000',

    // How It Works Section
    howToStart: '如何開始使用 TradingParadise',
    fourSimpleSteps: '四個簡單步驟，開啟 AI 自動交易之旅',
    step1Title: '拉取 GitHub 倉庫',
    step1Desc:
      'git clone https://github.com/NoFxAiOS/nofx 並切換到 dev 分支測試新功能。',
    step2Title: '配置環境',
    step2Desc:
      '前端設定交易所 API（如 Binance、Hyperliquid）、AI 模型和自訂提示詞。',
    step3Title: '部署與運行',
    step3Desc:
      '一鍵 Docker 部署，啟動 AI 代理。注意：高風險市場，僅用閒錢測試。',
    step4Title: '最佳化與貢獻',
    step4Desc: '監控交易，提交 PR 改進框架。加入 Telegram 分享策略。',
    importantRiskWarning: '重要風險提示',
    riskWarningText:
      'dev 分支不穩定，勿用無法承受損失的資金。TradingParadise 非託管，無官方策略。交易有風險，投資需謹慎。',

    // Community Section (testimonials are kept as-is since they are quotes)

    // Footer Section
    futureStandardAI: 'AI 交易的未來標準',
    links: '連結',
    resources: '資源',
    documentation: '文檔',
    supporters: '支持方',
    strategicInvestment: '(戰略投資)',

    // Login Modal
    accessNofxPlatform: '訪問 TradingParadise 平台',
    loginRegisterPrompt: '請選擇登入或註冊以訪問完整的 AI 交易平台',
    registerNewAccount: '註冊新帳號',

    // Candidate Coins Warnings
    candidateCoins: '候選幣種',
    candidateCoinsZeroWarning: '候選幣種數量為 0',
    possibleReasons: '可能原因：',
    ai500ApiNotConfigured:
      'AI500 數據源 API 未配置或無法訪問（請檢查訊號源設定）',
    apiConnectionTimeout: 'API 連接超時或返回數據為空',
    noCustomCoinsAndApiFailed: '未配置自訂幣種且 API 獲取失敗',
    solutions: '解決方案：',
    setCustomCoinsInConfig: '在交易員配置中設定自訂幣種列表',
    orConfigureCorrectApiUrl: '或者配置正確的數據源 API 地址',
    orDisableAI500Options: '或者禁用"使用 AI500 數據源"和"使用 OI Top"選項',
    signalSourceNotConfigured: '訊號源未配置',
    signalSourceWarningMessage:
      '您有交易員啟用了"使用 AI500 數據源"或"使用 OI Top"，但尚未配置訊號源 API 地址。這將導致候選幣種數量為 0，交易員無法正常工作。',
    configureSignalSourceNow: '立即配置訊號源',

    // FAQ Page
    faqTitle: '常見問題',
    faqSubtitle: '查找關於 TradingParadise 的常見問題解答',
    faqStillHaveQuestions: '還有其他問題？',
    faqContactUs: '加入我們的社群或查看 GitHub 獲取更多幫助',

    // FAQ Categories
    faqCategoryGettingStarted: '入門指南',
    faqCategoryInstallation: '安裝部署',
    faqCategoryConfiguration: '配置設定',
    faqCategoryTrading: '交易相關',
    faqCategoryTechnicalIssues: '技術問題',
    faqCategorySecurity: '安全相關',
    faqCategoryFeatures: '功能介紹',
    faqCategoryAIModels: 'AI 模型',
    faqCategoryContributing: '參與貢獻',

    // ===== 入門指南 =====
    faqWhatIsNOFX: 'TradingParadise 是什麼？',
    faqWhatIsNOFXAnswer:
      'TradingParadise 是一個開源的 AI 驅動交易作業系統，支援加密貨幣和美股市場。它使用大語言模型（LLM）如 DeepSeek、GPT、Claude、Gemini 來分析市場數據，進行自主交易決策。核心功能包括：多 AI 模型支援、多交易所交易、可視化策略構建器、回測系統、以及用於共識決策的 AI 辯論競技場。',

    faqHowDoesItWork: 'TradingParadise 是如何運作的？',
    faqHowDoesItWorkAnswer:
      'NOFX 分 5 步運作：1）配置 AI 模型和交易所 API 憑證；2）建立交易策略（幣種選擇、指標、風控）；3）建立"交易員"，組合 AI 模型 + 交易所 + 策略；4）啟動交易員 - 它會定期分析市場數據並做出買入/賣出/持有決策；5）在儀表板上監控表現。AI 使用思維鏈（Chain of Thought）推理來解釋每個決策。',

    faqIsProfitable: 'TradingParadise 能獲利嗎？',
    faqIsProfitableAnswer:
      'AI 交易是實驗性的，不保證獲利。加密貨幣期貨波動性大、風險高。TradingParadise 僅用於教育和研究目的。我們強烈建議：從小額開始（10-50 USDT），不要投入超過承受能力的資金，在實盤交易前充分回測，並理解過去的表現不代表未來的結果。',

    faqSupportedExchanges: '支援哪些交易所？',
    faqSupportedExchangesAnswer:
      'CEX（中心化）：幣安合約、Bybit、OKX、Bitget。DEX（去中心化）：Hyperliquid、Aster DEX、Lighter。每個交易所有不同特點 - 幣安流動性最好，Hyperliquid 完全鏈上無需 KYC。查看文檔獲取各交易所的設定指南。',

    faqSupportedAIModels: '支援哪些 AI 模型？',
    faqSupportedAIModelsAnswer:
      'TradingParadise 支援 7+ 種 AI 模型：DeepSeek（推薦性價比）、阿里雲通義千問、OpenAI（GPT-5.2）、Anthropic Claude、Google Gemini、xAI Grok、Kimi（月之暗面）。您也可以使用任何 OpenAI 相容的 API 端點。每個模型各有優勢 - DeepSeek 性價比高，OpenAI 能力強但貴，Claude 擅長推理。',

    faqSystemRequirements: '系統要求是什麼？',
    faqSystemRequirementsAnswer:
      '最低配置：2 核 CPU，2GB 記憶體，1GB 硬碟，穩定網路。推薦：4GB 記憶體用於運行多個交易員。支援系統：Linux、macOS 或 Windows（通過 Docker 或 WSL2）。Docker 是最簡單的安裝方式。手動安裝需要 Go 1.21+、Node.js 18+ 和 TA-Lib 庫。',

    // ===== 安裝部署 =====
    faqHowToInstall: '如何安裝 TradingParadise？',
    faqHowToInstallAnswer:
      '最簡單的方法（Linux/macOS）：運行 "curl -fsSL https://raw.githubusercontent.com/NoFxAiOS/nofx/main/install.sh | bash" - 這會自動安裝 Docker 容器。然後在瀏覽器中打開 http://127.0.0.1:3000。手動安裝或開發請克隆倉庫並按照 README 說明操作。',

    faqWindowsInstallation: 'Windows 如何安裝？',
    faqWindowsInstallationAnswer:
      '三種方式：1）Docker Desktop（推薦）- 安裝 Docker Desktop，然後在 PowerShell 中運行 "docker compose -f docker-compose.prod.yml up -d"；2）WSL2 - 安裝 Windows 子系統 Linux，然後按 Linux 方式安裝；3）WSL2 + Docker - 兩全其美，在 WSL2 終端運行安裝腳本。通過 http://127.0.0.1:3000 訪問。',

    faqDockerDeployment: 'Docker 部署一直失敗',
    faqDockerDeploymentAnswer:
      '常見解決方案：1）檢查 Docker 是否運行："docker info"；2）確保足夠記憶體（最少 2GB）；3）如果卡在 "go build"，嘗試："docker compose down && docker compose build --no-cache && docker compose up -d"；4）查看日誌："docker compose logs -f"；5）拉取較慢時，在 daemon.json 配置 Docker 映像檔。',

    faqManualInstallation: '如何手動安裝用於開發？',
    faqManualInstallationAnswer:
      '前置條件：Go 1.21+、Node.js 18+、TA-Lib。步驟：1）克隆倉庫："git clone https://github.com/NoFxAiOS/nofx.git"；2）安裝後端依賴："go mod download"；3）安裝前端依賴："cd web && npm install"；4）構建後端："go build -o nofx"；5）運行後端："./nofx"；6）運行前端（新終端）："cd web && npm run dev"。訪問 http://127.0.0.1:3000',

    faqServerDeployment: '如何部署到遠端伺服器？',
    faqServerDeploymentAnswer:
      '在伺服器上運行安裝腳本 - 它會自動檢測伺服器 IP。通過 http://伺服器IP:3000 訪問。配置 HTTPS：1）使用 Cloudflare（免費）- 新增域名，建立 A 記錄指向伺服器 IP，SSL 設為"靈活"；2）在 .env 中啟用 TRANSPORT_ENCRYPTION=true 進行瀏覽器端加密；3）通過 https://你的域名.com 訪問。',

    faqUpdateNOFX: '如何更新 TradingParadise？',
    faqUpdateNOFXAnswer:
      'Docker 方式：運行 "docker compose pull && docker compose up -d" 拉取最新映像檔並重啟。手動安裝：後端 "git pull && go build -o nofx"，前端 "cd web && npm install && npm run build"。data.db 中的配置在更新時會保留。',

    // ===== 配置設定 =====
    faqConfigureAIModels: '如何配置 AI 模型？',
    faqConfigureAIModelsAnswer:
      '進入配置頁面 → AI 模型部分。對於每個模型：1）從提供商獲取 API 金鑰（介面提供連結）；2）輸入 API 金鑰；3）可選自訂基礎 URL 和模型名稱；4）儲存。API 金鑰在儲存前會加密。儲存後測試連接以驗證。',

    faqConfigureExchanges: '如何配置交易所連接？',
    faqConfigureExchangesAnswer:
      '進入配置頁面 → 交易所部分。點擊"新增交易所"，選擇類型並輸入憑證。CEX（幣安/Bybit/OKX）：需要 API Key + Secret Key（OKX 還需要 Passphrase）。DEX（Hyperliquid/Aster/Lighter）：需要錢包地址和私鑰。務必只啟用必要權限（合約交易）並考慮 IP 白名單。',

    faqBinanceAPISetup: '如何正確設定幣安 API？',
    faqBinanceAPISetupAnswer:
      '重要步驟：1）在幣安 → API 管理中建立 API 金鑰；2）僅啟用"啟用合約"權限；3）考慮新增 IP 白名單增強安全；4）關鍵：在合約設定 → 偏好設定 → 持倉模式中切換為雙向持倉模式；5）確保資金在合約錢包（不是現貨）。-4061 錯誤表示需要雙向持倉模式。',

    faqHyperliquidSetup: '如何設定 Hyperliquid？',
    faqHyperliquidSetupAnswer:
      'Hyperliquid 是去中心化交易所，需要錢包認證。步驟：1）訪問 app.hyperliquid.xyz；2）連接錢包；3）產生 API 錢包（推薦）或使用主錢包；4）複製錢包地址和私鑰；5）在 NOFX 中新增 Hyperliquid 交易所並填入憑證。無需 KYC，完全鏈上。',

    faqCreateStrategy: '如何建立交易策略？',
    faqCreateStrategyAnswer:
      '進入策略工作室：1）幣種來源 - 選擇交易哪些幣（靜態列表、AI500 池或 OI 排行）；2）指標 - 啟用技術指標（EMA、MACD、RSI、ATR、成交量、OI、資金費率）；3）風控 - 設定槓杆限制、最大持倉數、保證金使用上限、倉位大小限制；4）自訂提示詞（可選）- 為 AI 新增特定指令。儲存後分配給交易員。',

    faqCreateTrader: '如何建立並啟動交易員？',
    faqCreateTraderAnswer:
      '進入交易員頁面：1）點擊"建立交易員"；2）選擇 AI 模型（需先配置）；3）選擇交易所（需先配置）；4）選擇策略（或使用預設）；5）設定決策間隔（如 5 分鐘）；6）儲存，然後點擊"啟動"開始交易。在儀表板頁面監控表現。',

    // ===== 交易相關 =====
    faqHowAIDecides: 'AI 如何做出交易決策？',
    faqHowAIDecidesAnswer:
      'AI 使用思維鏈（CoT）推理分 4 步：1）持倉分析 - 審查當前持倉和盈虧；2）風險評估 - 檢查帳戶保證金、可用餘額；3）機會評估 - 分析市場數據、指標、候選幣種；4）最終決策 - 輸出具體操作（買入/賣出/持有）及理由。您可以在決策日誌中查看完整推理過程。',

    faqDecisionFrequency: 'AI 多久做一次決策？',
    faqDecisionFrequencyAnswer:
      '每個交易員可單獨配置，預設 3-5 分鐘。考慮因素：太頻繁（1-2 分鐘）= 過度交易、手續費高；太慢（30+ 分鐘）= 錯過機會。建議：活躍交易 5 分鐘，波段交易 15-30 分鐘。AI 在很多週期可能決定"持有"（不操作）。',

    faqNoTradesExecuting: '為什麼交易員不執行任何交易？',
    faqNoTradesExecutingAnswer:
      '常見原因：1）AI 決定等待（查看決策日誌了解原因）；2）合約帳戶餘額不足；3）達到最大持倉數限制（預設：3）；4）交易所 API 問題（檢查錯誤資訊）；5）策略約束太嚴格。查看儀表板 → 決策日誌了解每個週期的 AI 推理詳情。',

    faqOnlyShortPositions: '為什麼 AI 只開空單？',
    faqOnlyShortPositionsAnswer:
      '通常是因為幣安持倉模式問題。解決方案：在幣安合約 → 偏好設定 → 持倉模式中切換為雙向持倉。必須先平掉所有持倉。切換後，AI 可以獨立開多單和空單。',

    faqLeverageSettings: '槓桿設定如何運作？',
    faqLeverageSettingsAnswer:
      '槓桿在策略 → 風控中設定：BTC/ETH 槓桿（通常 5-20 倍）和山寨幣槓桿（通常 3-10 倍）。更高槓桿 = 更高風險和潛在收益。子帳戶可能有限制（如幣安子帳戶限制 5 倍）。AI 下單時會遵守這些限制。',

    faqStopLossTakeProfit: 'NOFX 支援止損止盈嗎？',
    faqStopLossTakeProfitAnswer:
      'AI 可以在決策中建議止損/止盈價位，但這是基於指導而非交易所硬編碼訂單。AI 每個週期監控持倉，可能根據盈虧決定平倉。如需保證止損，可以手動在交易所設定訂單，或調整策略提示詞使其更保守。',

    faqMultipleTraders: '可以運行多個交易員嗎？',
    faqMultipleTradersAnswer:
      '可以！TradingParadise 支援運行 20+ 個併發交易員。每個交易員可以有不同的：AI 模型、交易所帳戶、策略、決策間隔。用於 A/B 測試策略、比較 AI 模型或跨交易所分散風險。在競賽頁面監控所有交易員。',

    faqAICosts: 'AI API 調用費用是多少？',
    faqAICostsAnswer:
      '每個交易員每天大約費用（5 分鐘間隔）：DeepSeek：$0.10-0.50；Qwen：$0.20-0.80；OpenAI：$2-5；Claude：$1-3。費用取決於提示詞長度和響應 token 數。DeepSeek 性價比最高。更長的決策間隔可降低費用。',

    // ===== 技術問題 =====
    faqPortInUse: '連接埠 8080 或 3000 被佔用',
    faqPortInUseAnswer:
      '查看佔用連接埠的進程：macOS/Linux 用 "lsof -i :8080"，Windows 用 "netstat -ano | findstr 8080"。終止進程或在 .env 中修改連接埠：NOFX_BACKEND_PORT=8081、NOFX_FRONTEND_PORT=3001。然後 "docker compose down && docker compose up -d" 重啟。',

    faqFrontendNotLoading: '前端一直顯示"載入中..."',
    faqFrontendNotLoadingAnswer:
      '後端可能未運行或無法訪問。檢查：1）"curl http://127.0.0.1:8080/api/health" 應返回 {"status":"ok"}；2）"docker compose ps" 驗證容器運行中；3）查看後端日誌："docker compose logs nofx-backend"；4）確保防火牆允許 8080 連接埠。',

    faqDatabaseLocked: '資料庫鎖定錯誤',
    faqDatabaseLockedAnswer:
      '多個進程同時訪問 SQLite 導致。解決方案：1）停止所有進程："docker compose down" 或 "pkill nofx"；2）如有鎖檔案刪除："rm -f data/data.db-wal data/data.db-shm"；3）重啟："docker compose up -d"。只能有一個後端實例訪問資料庫。',

    faqTALibNotFound: '構建時找不到 TA-Lib',
    faqTALibNotFoundAnswer:
      'TA-Lib 是技術指標所需。安裝：macOS："brew install ta-lib"；Ubuntu/Debian："sudo apt-get install libta-lib0-dev"；CentOS："yum install ta-lib-devel"。安裝後重新構建："go build -o nofx"。Docker 映像檔已預裝 TA-Lib。',

    faqAIAPITimeout: 'AI API 超時或連接被拒絕',
    faqAIAPITimeoutAnswer:
      '檢查：1）API 金鑰有效（用 curl 測試）；2）網路能訪問 API 端點（ping/curl）；3）API 提供商未宕機（查看狀態頁）；4）VPN/防火牆未阻止；5）未超過速率限制。預設超時 120 秒。',

    faqBinancePositionMode: '幣安錯誤代碼 -4061（持倉模式）',
    faqBinancePositionModeAnswer:
      '錯誤："Order\'s position side does not match user\'s setting"。您處於單向持倉模式，但 NOFX 需要雙向持倉模式。修復：1）先平掉所有持倉；2）幣安合約 → 設定（齒輪圖示）→ 偏好設定 → 持倉模式 → 切換為"雙向持倉"；3）重啟交易員。',

    faqBalanceShowsZero: '帳戶餘額顯示 0',
    faqBalanceShowsZeroAnswer:
      '資金可能在現貨錢包而非合約錢包。解決方案：1）在幣安進入錢包 → 合約 → 劃轉；2）將 USDT 從現貨劃轉到合約；3）重新整理 NOFX 儀表板。也檢查：資金未被理財/質押產品鎖定。',

    faqDockerPullFailed: 'Docker 映像檔拉取失敗或緩慢',
    faqDockerPullFailedAnswer:
      'Docker Hub 在某些地區可能較慢。解決方案：1）在 /etc/docker/daemon.json 配置 Docker 鏡像：{"registry-mirrors": ["https://mirror.gcr.io"]}；2）重啟 Docker；3）重試拉取。或使用 GitHub Container Registry（ghcr.io）在您的地區可能連接更好。',

    // ===== 安全相關 =====
    faqAPIKeyStorage: 'API 金鑰如何儲存？',
    faqAPIKeyStorageAnswer:
      'API 金鑰使用 AES-256-GCM 加密後儲存在本地 SQLite 資料庫中。加密金鑰（DATA_ENCRYPTION_KEY）儲存在您的 .env 檔案中。金鑰僅在 API 調用需要時在記憶體中解密。切勿分享您的 data.db 或 .env 檔案。',

    faqEncryptionDetails: 'TradingParadise 使用什麼加密？',
    faqEncryptionDetailsAnswer:
      'TradingParadise 使用多層加密：1）AES-256-GCM 用於資料庫儲存（API 金鑰、密鑰）；2）RSA-2048 用於可選的傳輸加密（瀏覽器到伺服器）；3）JWT 用於認證令牌。金鑰在安裝時產生。HTTPS 環境啟用 TRANSPORT_ENCRYPTION=true。',

    faqSecurityBestPractices: '安全最佳實踐是什麼？',
    faqSecurityBestPracticesAnswer:
      '建議：1）使用帶 IP 白名單和最小權限（僅合約交易）的交易所 API 金鑰；2）為 NOFX 使用專用子帳戶；3）遠端部署啟用 TRANSPORT_ENCRYPTION；4）切勿分享 .env 或 data.db 檔案；5）使用有效證書的 HTTPS；6）定期輪換 API 金鑰；7）監控帳戶活動。',

    faqCanNOFXStealFunds: 'TradingParadise 會盜取我的資金嗎？',
    faqCanNOFXStealFundsAnswer:
      'TradingParadise 是開源的（AGPL-3.0 許可）- 您可以在 GitHub 審計所有程式碼。API 金鑰儲存在您的機器本地，從不發送到外部伺服器。NOFX 只有您通過 API 金鑰授予的權限。為最大安全：使用僅交易權限（無提現）的 API 金鑰，啟用 IP 白名單，使用專用子帳戶。',

    // ===== 功能介紹 =====
    faqStrategyStudio: '什麼是策略工作室？',
    faqStrategyStudioAnswer:
      '策略工作室是可視化策略構建器，您可以配置：1）幣種來源 - 交易哪些加密貨幣（靜態列表、AI500 熱門幣、OI 排行）；2）技術指標 - EMA、MACD、RSI、ATR、成交量、持倉量、資金費率；3）風控 - 槓桿限制、倉位大小、保證金上限；4）自訂提示詞 - AI 的特定指令。無需程式設計。',

    faqBacktestLab: '什麼是回測實驗室？',
    faqBacktestLabAnswer:
      '回測實驗室用歷史數據測試您的策略，無需冒真金風險。功能：1）配置 AI 模型、日期範圍、初始餘額；2）即時觀看進度和權益曲線；3）查看指標：收益率、最大回撤、夏普比率、勝率；4）分析單筆交易和 AI 推理。實盤交易前驗證策略的必備工具。',

    faqDebateArena: '什麼是辯論競技場？',
    faqDebateArenaAnswer:
      '辯論競技場讓多個 AI 模型在執行前辯論交易決策。設定：1）選擇 2-5 個 AI 模型；2）分配角色（多頭、空頭、分析師、逆向者、風險經理）；3）觀看他們多輪辯論；4）基於共識投票做最終決策。適用於需要多角度考慮的高確信度交易。',

    faqCompetitionMode: '什麼是競賽模式？',
    faqCompetitionModeAnswer:
      '競賽頁面顯示所有交易員的即時排行榜。比較：ROI、盈虧、夏普比率、勝率、交易次數。用於 A/B 測試不同 AI 模型、策略或配置。交易員可標記為"在競賽中顯示"以出現在排行榜上。',

    faqChainOfThought: '什麼是思維鏈（CoT）？',
    faqChainOfThoughtAnswer:
      '思維鏈是 AI 的推理過程，可在決策日誌中查看。AI 分 4 步解釋思考：1）當前持倉分析；2）帳戶風險評估；3）市場機會評估；4）最終決策理由。這種透明度幫助您理解 AI 為什麼做出每個決策，有助於改進策略。',

    // ===== AI 模型 =====
    faqWhichAIModelBest: '應該使用哪個 AI 模型？',
    faqWhichAIModelBestAnswer:
      '推薦：DeepSeek 性價比最高（每天 $0.10-0.50）。備選：OpenAI 推理能力最強但貴（每天 $2-5）；Claude 適合細緻分析；Qwen 價格有競爭力。您可以運行多個交易員使用不同模型進行比較。查看競賽頁面看哪個對您的策略表現最好。',

    faqCustomAIAPI: '可以使用自訂 AI API 嗎？',
    faqCustomAIAPIAnswer:
      '可以！TradingParadise 支援任何 OpenAI 相容的 API。在配置 → AI 模型 → 自訂 API 中：1）輸入 API 端點 URL（如 https://your-api.com/v1）；2）輸入 API 金鑰；3）指定模型名稱。適用於自託管模型、替代提供商或通過第三方代理的 Claude。',

    faqAIHallucinations: 'AI 幻覺問題怎麼辦？',
    faqAIHallucinationsAnswer:
      'AI 模型有時會產生不正確或虛構的資訊（"幻覺"）。NOFX 通過以下方式緩解：1）提供帶真實市場數據的結構化提示詞；2）強制 JSON 輸出格式；3）執行前驗證訂單。但 AI 交易是實驗性的 - 始終監控決策，不要完全依賴 AI 判斷。',

    faqCompareAIModels: '如何比較不同 AI 模型？',
    faqCompareAIModelsAnswer:
      '建立多個交易員，使用不同 AI 模型但相同策略/交易所。同時運行並在競賽頁面比較。關注指標：ROI、勝率、夏普比率、最大回撤。或者使用回測實驗室用相同歷史數據測試模型。辯論競技場也展示不同模型對同一情況的推理方式。',

    // ===== 參與貢獻 =====
    faqHowToContribute: '如何為 TradingParadise 做貢獻？',
    faqHowToContributeAnswer:
      'NOFX 是開源專案，歡迎貢獻！貢獻方式：1）程式碼 - 修復 bug、新增功能（查看 GitHub Issues）；2）文檔 - 改進指南、翻譯；3）Bug 報告 - 詳細報告問題；4）功能建議 - 提出改進意見。從標記為"good first issue"的問題開始。所有貢獻者可能獲得空投獎勵。',

    faqPRGuidelines: 'PR 指南是什麼？',
    faqPRGuidelinesAnswer:
      'PR 流程：1）Fork 倉庫到您的帳戶；2）從 dev 建立功能分支："git checkout -b feat/your-feature"；3）修改程式碼，運行 lint："npm --prefix web run lint"；4）使用 Conventional Commits 格式提交；5）推送並建立 PR 到 NoFxAiOS/nofx:dev；6）關聯相關 issue（Closes #123）；7）等待審核。保持 PR 小而聚焦。',

    faqBountyProgram: '有賞金計畫嗎？',
    faqBountyProgramAnswer:
      '有！貢獻者根據貢獻獲得空投獎勵：程式碼提交（權重最高）、bug 修復、功能建議、文檔。帶"bounty"標籤的 issue 有現金獎勵。完成工作後提交 Bounty Claim。查看 CONTRIBUTING.md 了解獎勵結構詳情。',

    faqReportBugs: '如何報告 bug？',
    faqReportBugsAnswer:
      'Bug 報告：在 GitHub 開 Issue，包含：1）問題清晰描述；2）複現步驟；3）預期 vs 實際行為；4）系統資訊（OS、Docker 版本、瀏覽器）；5）相關日誌。安全漏洞：不要開公開 issue - 請在 Twitter 私信 @Web3Tinkle。',

    // Web Crypto Environment Check
    environmentCheck: {
      button: '一鍵檢測環境',
      checking: '正在檢測...',
      description: '系統將自動檢測當前瀏覽器是否允許使用 Web Crypto。',
      secureTitle: '環境安全，已啟用 Web Crypto',
      secureDesc: '頁面處於安全上下文，可繼續輸入敏感資訊並使用加密傳輸。',
      insecureTitle: '檢測到非安全環境',
      insecureDesc:
        '當前訪問未通過 HTTPS 或可信 localhost，瀏覽器會阻止 Web Crypto 調用。',
      tipsTitle: '修改建議：',
      tipHTTPS:
        '通過 HTTPS 訪問（即使是 IP 也需證書），或部署到支援 TLS 的域名。',
      tipLocalhost: '開發階段請使用 http://localhost 或 127.0.0.1。',
      tipIframe:
        '避免把應用嵌入在不安全的 HTTP iframe 或會降級協議的反向代理中。',
      unsupportedTitle: '瀏覽器未提供 Web Crypto',
      unsupportedDesc:
        '請通過 HTTPS 或本機 localhost 訪問 NOFX，並避免嵌入不安全 iframe/反向代理，以符合瀏覽器的 Web Crypto 規則。',
      summary: '當前來源：{origin} · 協議：{protocol}',
      disabledTitle: '傳輸加密已禁用',
      disabledDesc:
        '服務端傳輸加密已關閉，API 金鑰將以明文傳輸。如需增強安全性，請設定 TRANSPORT_ENCRYPTION=true。',
    },

    environmentSteps: {
      checkTitle: '1. 環境檢測',
      selectTitle: '2. 選擇交易所',
    },

    // Two-Stage Key Modal
    twoStageKey: {
      title: '兩階段私鑰輸入',
      stage1Description: '請輸入私鑰的前 {length} 位字元',
      stage2Description: '請輸入私鑰的後 {length} 位字元',
      stage1InputLabel: '第一部分',
      stage2InputLabel: '第二部分',
      characters: '位字元',
      processing: '處理中...',
      nextButton: '下一步',
      cancelButton: '取消',
      backButton: '返回',
      encryptButton: '加密並提交',
      obfuscationCopied: '混淆數據已複製到剪貼簿',
      obfuscationInstruction: '請貼上其他內容清空剪貼簿，然後繼續',
      obfuscationManual: '需要手動混淆',
    },

    // Error Messages
    errors: {
      privatekeyIncomplete: '請輸入至少 {expected} 位字元',
      privatekeyInvalidFormat: '私鑰格式無效（應為 64 位十六進位字元）',
      privatekeyObfuscationFailed: '剪貼簿混淆失敗',
    },

    // Position History
    positionHistory: {
      title: '歷史倉位',
      loading: '載入歷史倉位...',
      noHistory: '暫無歷史倉位',
      noHistoryDesc: '平倉後的倉位記錄將顯示在此處',
      showingPositions: '顯示 {count} / {total} 條記錄',
      totalPnL: '總盈虧',
      // Stats
      totalTrades: '總交易次數',
      winLoss: '獲利: {win} / 虧損: {loss}',
      winRate: '勝率',
      profitFactor: '獲利因子',
      profitFactorDesc: '總獲利 / 總虧損',
      plRatio: '盈虧比',
      plRatioDesc: '平均獲利 / 平均虧損',
      sharpeRatio: '夏普比率',
      sharpeRatioDesc: '風險調整收益',
      maxDrawdown: '最大回撤',
      avgWin: '平均獲利',
      avgLoss: '平均虧損',
      netPnL: '淨盈虧',
      netPnLDesc: '扣除手續費後',
      fee: '手續費',
      // Direction Stats
      trades: '交易次數',
      avgPnL: '平均盈虧',
      // Symbol Performance
      symbolPerformance: '品種表現',
      // Filters
      symbol: '交易對',
      allSymbols: '全部交易對',
      side: '方向',
      all: '全部',
      sort: '排序',
      latestFirst: '最新優先',
      oldestFirst: '最早優先',
      highestPnL: '獲利最高',
      lowestPnL: '虧損最多',
      // Table Headers
      entry: '開倉價',
      exit: '平倉價',
      qty: '數量',
      value: '倉位價值',
      lev: '槓桿',
      pnl: '盈虧',
      duration: '持倉時長',
      closedAt: '平倉時間',
    },

    // Debate Arena Page
    debatePage: {
      title: '行情辯論大賽',
      subtitle: '觀看 AI 模型辯論市場行情並達成共識',
      newDebate: '新建辯論',
      noDebates: '暫無辯論',
      createFirst: '建立您的第一場辯論開始',
      selectDebate: '選擇辯論查看詳情',
      createDebate: '建立辯論',
      creating: '建立中...',
      debateName: '辯論名稱',
      debateNamePlaceholder: '例如：BTC 是牛還是熊？',
      tradingPair: '交易對',
      strategy: '策略',
      selectStrategy: '選擇策略',
      maxRounds: '最大回合',
      autoExecute: '自動執行',
      autoExecuteHint: '自動執行共識交易',
      participants: '參與者',
      addParticipant: '新增 AI 參與者',
      noModels: '暫無可用 AI 模型',
      atLeast2: '至少新增 2 名參與者',
      personalities: {
        bull: '激進多頭',
        bear: '謹慎空頭',
        analyst: '數據分析師',
        contrarian: '逆勢者',
        risk_manager: '風控經理',
      },
      status: {
        pending: '待開始',
        running: '進行中',
        voting: '投票中',
        completed: '已完成',
        cancelled: '已取消',
      },
      actions: {
        start: '開始辯論',
        starting: '啟動中...',
        cancel: '取消',
        delete: '刪除',
        execute: '執行交易',
      },
      round: '回合',
      roundOf: '第 {current} / {max} 回合',
      messages: '訊息',
      noMessages: '暫無訊息',
      waitingStart: '等待辯論開始...',
      votes: '投票',
      consensus: '共識',
      finalDecision: '最終決定',
      confidence: '信心度',
      votesCount: '{count} 票',
      decision: {
        open_long: '開多',
        open_short: '開空',
        close_long: '平多',
        close_short: '平空',
        hold: '持有',
        wait: '觀望',
      },
      messageTypes: {
        analysis: '分析',
        rebuttal: '反駁',
        vote: '投票',
        summary: '總結',
      },
    },
  },
}

export function t(
  key: string,
  lang: Language,
  params?: Record<string, string | number>
): string {
  // Handle nested keys like 'twoStageKey.title'
  const keys = key.split('.')
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  let text = typeof value === 'string' ? value : key

  // Replace parameters like {count}, {gap}, etc.
  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value))
    })
  }

  return text
}
