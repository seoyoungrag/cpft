
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="MakeDocLinkageResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "makeDocLinkageResult"
})
@XmlRootElement(name = "MakeDocLinkageResponse")
public class MakeDocLinkageResponse {

    @XmlElement(name = "MakeDocLinkageResult")
    protected int makeDocLinkageResult;

    /**
     * makeDocLinkageResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getMakeDocLinkageResult() {
        return makeDocLinkageResult;
    }

    /**
     * makeDocLinkageResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setMakeDocLinkageResult(int value) {
        this.makeDocLinkageResult = value;
    }

}
