import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SettingsActions from "../components/SettingsActions";
import SettingsCard from "../components/SettingsCard";
import SettingsInput from "../components/SettingsInput";
import SettingsToggleRow from "../components/SettingsToggleRow";
import SettingsButtonRow from "../components/SettingsButtonRow";

function SettingsPage() {
  return (
    <div className="workspace-page">
      <Sidebar />

      <div className="workspace-main">
        <Topbar />

        <main className="workspace-content">
          <div className="settings-page__top">
            <div>
              <h1 className="workspace-title">Settings</h1>
              <p className="workspace-subtitle">
                Manage system preferences and configurations
              </p>
            </div>

            <SettingsActions />
          </div>

          <div className="settings-grid settings-grid--top">
            <SettingsCard
              icon="👤"
              title="Account Settings"
              iconClass="settings-card__icon--blue"
            >
              <SettingsInput label="Full Name" value="Sarah Sanders" />
              <SettingsInput label="Email Address" value="Sarah.S@owow.com" />
              <SettingsInput label="Role" value="Administrator" />
              <SettingsInput label="Department" value="Project Management" />
            </SettingsCard>

            <SettingsCard
              icon="🛡️"
              title="Security Settings"
              iconClass="settings-card__icon--green"
            >
              <SettingsInput label="Current Password" value="••••••••••" />
              <SettingsInput label="New Password" placeholder="Enter new password" />
              <SettingsInput
                label="Confirm Password"
                placeholder="Confirm new password"
              />
            </SettingsCard>
          </div>

          <div className="settings-section-block">
            <SettingsCard
              icon="🔔"
              title="Notification Settings"
              subtitle="Manage how you receive notifications"
              iconClass="settings-card__icon--yellow"
              fullWidth
            >
              <div className="settings-toggle-grid">
                <SettingsToggleRow
                  title="Email Notifications"
                  subtitle="Receive updates via email"
                  checked
                />
                <SettingsToggleRow
                  title="Project Updates"
                  subtitle="Notify on project changes"
                  checked
                />
                <SettingsToggleRow
                  title="Push Notifications"
                  subtitle="Browser push notifications"
                  checked
                />
                <SettingsToggleRow
                  title="Budget Alerts"
                  subtitle="Notify on budget thresholds"
                  checked
                />
              </div>
            </SettingsCard>
          </div>

          <div className="settings-grid settings-grid--bottom">
            <SettingsCard
              icon="🌐"
              title="Language & Region"
              iconClass="settings-card__icon--blue"
            >
              <SettingsInput label="Language" placeholder="" />
              <SettingsInput label="Timezone" placeholder="" />
            </SettingsCard>

            <SettingsCard
              icon="🗄️"
              title="Data Management"
              iconClass="settings-card__icon--green"
            >
              <SettingsButtonRow label="Export All Data" />
              <SettingsButtonRow label="Import Data" />
              <SettingsButtonRow label="Clear Cache" />
            </SettingsCard>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SettingsPage;