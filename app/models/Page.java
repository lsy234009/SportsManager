package models;

import java.util.List;
import java.util.Map;


import controllers.Application;

import play.api.i18n.Lang;
import play.i18n.Messages;

/**
 * 
 * @author 王加刚
 * @date 2013-4-9
 * @description 分页
 */
public class Page {
	private int pageSize;
    private long totalRowCount;
    private int pageIndex;
    private List<User> userList;
    private List<Project> projectList;
    private List<Game> gameList;
    private List<Enroll> scoreList;

	public List<Enroll> getScoreList() {
		return scoreList;
	}

	public void setScoreList(List<Enroll> scoreList) {
		this.scoreList = scoreList;
	}

	public List<Game> getGameList() {
		return gameList;
	}

	public void setGameList(List<Game> gameList) {
		this.gameList = gameList;
	}

	public List<Project> getProjectList() {
		return projectList;
	}

	public void setProjectList(List<Project> projectList) {
		this.projectList = projectList;
	}

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}


	public void setTotalRowCount(long totalRowCount) {
		this.totalRowCount = totalRowCount;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}

	public long getTotalRowCount() {
        return totalRowCount;
    }
    
    public int getPageIndex() {
        return pageIndex;
    }
    
    public boolean hasPrev() {
        return pageIndex > 1;
    }
    
    public boolean hasNext() {
        return ((totalRowCount + pageSize - 1)/pageSize) > pageIndex;
    }
    
    public String getDisplayXtoYofZ() {
    	String to = Messages.get(Lang.get(Application.lang).get(),"to");
    	String of = Messages.get(Lang.get(Application.lang).get(),"of");
        int start = ((pageIndex - 1) * pageSize + 1);
        int end = start + Math.min(pageSize, (int)totalRowCount) - 1;
        if(end>totalRowCount){
        	return start + " "+to+" " + totalRowCount + " "+of+" " + totalRowCount;
        }else{
        	return start + " "+to+" " + end + " "+of+" " + totalRowCount;
        }
    }

	
	public void amendPageIndex(){

		if (Math.ceil(totalRowCount/pageSize) < pageIndex){
			pageIndex =  (int) Math.ceil(totalRowCount/pageSize);
		}
		
		if (pageIndex <1){
			pageIndex = 1;
		}
	}
}
