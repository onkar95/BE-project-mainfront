const { DashboardContest, DashboardDataProvider } = require('./dashboardContext')
const { ProfileContext, ProfileDataProvider } = require('./profileContext')
const { UserContext, UserDataProvider } = require('./userContext')
const { MessageContext, MessageDataProvider } = require('./messageContext')
const { AssignmentContext, AssignmentDataProvider } = require('./AssignmentsContext')
const { JobContext, JobDataProvider } = require('./jobContext')

module.exports = {
    DashboardDataProvider,
    ProfileDataProvider,
    UserDataProvider,
    MessageDataProvider,
    AssignmentDataProvider,
    ProfileContext,
    DashboardContest,
    UserContext,
    MessageContext,
    AssignmentContext,
    JobContext, JobDataProvider

}