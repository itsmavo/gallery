def APP_URL = 'https://gallery-tmdk.onrender.com'

pipeline{
    agent any
    
    tools {nodejs 'node'
            git 'Default'}
    stages{
        stage('Clone repo') {
            steps {
                echo 'Build Starting'
                git url: 'https://github.com/itsmavo/gallery', branch:'master'
            }
        }
        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                sh 'curl -X POST https://api.render.com/deploy/srv-cvkig78dl3ps738jqu2g?key=6eQWxwgwtGM'
            }
        }
        stage('Success'){
            steps {
                echo 'Done'
            }
        }
    }
    post {
    always {
        slackSend(
                channel: '#wk3-project-notifications',
                color: currentBuild.currentResult == 'SUCCESS' ? 'good' : 'danger',
                message: """
                    *Build ${currentBuild.currentResult}* - ${env.JOB_NAME} #${env.BUILD_NUMBER}
                    *Duration*: ${currentBuild.durationString}
                    *URL*: ${env.BUILD_URL}
                    *APP URL*: ${APP_URL}
                    *Git Commit*: ${env.GIT_COMMIT}
                """
            )
            
            // Email notification
            emailext (
                subject: "Jenkins Build ${currentBuild.currentResult}: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <p>Build ${currentBuild.currentResult}: ${env.JOB_NAME} #${env.BUILD_NUMBER}</p>
                    <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                    <p>Duration: ${currentBuild.durationString}</p>
                """,
                to: 'marvin.osolo@student.moringaschool.com',
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                )
    }
}
}
