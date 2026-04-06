function ChatButton() {
  const slackUrl = "https://slack.com";

  return (
    <a
      href={slackUrl}
      target="_blank"
      rel="noreferrer"
      className="slack-chat-button"
      aria-label="Chat on Slack"
      title="Chat on Slack"
    >
      <span className="slack-chat-tooltip">Chat on Slack</span>

      <span className="slack-chat-icon-wrapper" aria-hidden="true">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
    alt="Slack"
    className="slack-chat-icon"
  />
</span>
    </a>
  );
}

export default ChatButton;